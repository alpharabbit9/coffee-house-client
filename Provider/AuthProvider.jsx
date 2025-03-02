export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading , setLoading] = useState(true);



  const authInfo = { 
    user,
    setUser,
    createUser,
    userLogOut,
    UserLogIn,
    createGoogleUser,
    loading,
    updateUserProfile,
    resetPass

  };


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;