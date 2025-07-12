
// This is a more realistic mock client with authentication functionality
const createMockClient = () => {
  // Simulate storage for users and data
  let users = [];
  let profiles = [];
  let projects = [];
  let session = null;
  let authSubscription = null;

  // Generate a random UUID
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  return {
    auth: {
      signUp: ({ email, password, options }) => {
        console.log("Mock signUp called with:", email, options?.data);
        
        // Check if user already exists
        if (users.some(u => u.email === email)) {
          return { error: { message: "User already exists" }, data: null };
        }
        
        const user = {
          id: generateUUID(),
          email,
          user_metadata: options?.data || {},
          created_at: new Date().toISOString()
        };
        
        users.push(user);
        
        // Create profile
        const profile = {
          id: user.id,
          first_name: user.user_metadata.first_name || '',
          last_name: user.user_metadata.last_name || '',
          role: user.user_metadata.role || 'investor',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        profiles.push(profile);
        
        console.log("Mock user created:", user);
        console.log("Mock profile created:", profile);
        
        return { data: { user }, error: null };
      },
      
      signInWithPassword: ({ email, password }) => {
        console.log("Mock signIn called with:", email);
        
        const user = users.find(u => u.email === email);
        if (!user) {
          return { error: { message: "Invalid login credentials" }, data: null };
        }
        
        session = {
          user,
          access_token: "mock-token-" + Math.random(),
          expires_at: Date.now() + 3600000
        };
        
        // Trigger subscription if exists
        if (authSubscription) {
          setTimeout(() => {
            authSubscription('SIGNED_IN', session);
          }, 0);
        }
        
        return { data: { user, session }, error: null };
      },
      
      signOut: () => {
        const oldSession = session;
        session = null;
        
        // Trigger subscription if exists
        if (authSubscription && oldSession) {
          setTimeout(() => {
            authSubscription('SIGNED_OUT', null);
          }, 0);
        }
        
        return { error: null };
      },
      
      getSession: () => {
        return Promise.resolve({ data: { session } });
      },
      
      onAuthStateChange: (callback) => {
        authSubscription = callback;
        
        // Return a fake subscription object
        return {
          data: {
            subscription: {
              unsubscribe: () => {
                authSubscription = null;
              }
            }
          }
        };
      }
    },
    
    from: (table) => {
      return {
        select: (columns = '*') => {
          let query = { 
            filter: {},
            order: null,
            ascending: true
          };
          
          return {
            eq: (column, value) => {
              query.filter[column] = value;
              return {
                order: (column, { ascending = true } = {}) => {
                  query.order = column;
                  query.ascending = ascending;
                  return this;
                },
                single: () => {
                  let result;
                  
                  if (table === 'profiles') {
                    result = profiles.find(p => {
                      return Object.keys(query.filter).every(key => p[key] === query.filter[key]);
                    });
                  } else if (table === 'projects') {
                    result = projects.find(p => {
                      return Object.keys(query.filter).every(key => p[key] === query.filter[key]);
                    });
                  }
                  
                  if (!result) {
                    return Promise.resolve({ data: null, error: { message: "No data found" } });
                  }
                  
                  return Promise.resolve({ data: result, error: null });
                }
              };
            },
            order: (column, { ascending = true } = {}) => {
              query.order = column;
              query.ascending = ascending;
              return this;
            },
            eq: (column, value) => {
              query.filter[column] = value;
              
              const executeFetch = () => {
                if (table === 'profiles') {
                  const filtered = profiles.filter(p => {
                    return Object.keys(query.filter).every(key => p[key] === query.filter[key]);
                  });
                  
                  if (query.order) {
                    filtered.sort((a, b) => {
                      return query.ascending ? 
                        a[query.order] > b[query.order] ? 1 : -1 :
                        a[query.order] < b[query.order] ? 1 : -1;
                    });
                  }
                  
                  return Promise.resolve({ data: filtered, error: null });
                } else if (table === 'projects') {
                  const filtered = projects.filter(p => {
                    return Object.keys(query.filter).every(key => p[key] === query.filter[key]);
                  });
                  
                  if (query.order) {
                    filtered.sort((a, b) => {
                      return query.ascending ? 
                        a[query.order] > b[query.order] ? 1 : -1 :
                        a[query.order] < b[query.order] ? 1 : -1;
                    });
                  }
                  
                  return Promise.resolve({ data: filtered, error: null });
                }
                
                return Promise.resolve({ data: [], error: null });
              };
              
              return {
                order: (column, { ascending = true } = {}) => {
                  query.order = column;
                  query.ascending = ascending;
                  return { then: executeFetch };
                },
                then: executeFetch
              };
            }
          };
        },
        insert: (data) => {
          return {
            select: () => {
              if (table === 'projects') {
                const newProject = Array.isArray(data) ? data[0] : data;
                
                // Add required fields
                const project = {
                  id: newProject.id || generateUUID(),
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString(),
                  ...newProject
                };
                
                projects.push(project);
                console.log("Mock project created:", project);
                
                return Promise.resolve({ data: [project], error: null });
              }
              
              return Promise.resolve({ error: null });
            }
          };
        },
        update: (data) => {
          return {
            eq: (column, value) => {
              if (table === 'profiles') {
                const index = profiles.findIndex(p => p[column] === value);
                if (index !== -1) {
                  profiles[index] = { ...profiles[index], ...data, updated_at: new Date().toISOString() };
                }
              } else if (table === 'projects') {
                const index = projects.findIndex(p => p[column] === value);
                if (index !== -1) {
                  projects[index] = { ...projects[index], ...data, updated_at: new Date().toISOString() };
                }
              }
              
              return Promise.resolve({ error: null });
            }
          };
        },
        delete: () => {
          return {
            eq: (column, value) => {
              if (table === 'projects') {
                const index = projects.findIndex(p => p[column] === value);
                if (index !== -1) {
                  projects.splice(index, 1);
                }
              }
              
              return Promise.resolve({ error: null });
            }
          };
        }
      };
    },
    storage: {
      from: (bucketName) => {
        return {
          upload: (filePath, file) => {
            console.log(`Mock uploading ${filePath} to ${bucketName}`);
            return Promise.resolve({ data: { path: filePath }, error: null });
          },
          getPublicUrl: (filePath) => {
            return { data: { publicUrl: `https://mock-storage.supabase.co/${bucketName}/${filePath}` } };
          }
        };
      }
    }
  };
};

// Export the mock client
export const supabase = createMockClient() as any;
