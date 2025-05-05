//1. folder yapısını ayarla
///contexts klasörü oluştur
// içine context dosyasını oluştur: SettingsContext.jsx

//2. createContext ile context oluştur. export etmeyi unutma!
export const SettingsContext = createContext();

//3. Provider component'i oluştur.
//children'ı props'dan destruct et.
//context'in Provider'ına children olarak ver.
export const SettingsContextProvider = ({ children }) => {
  return (
    <SettingsContext.Provider value={{}}>{children}</SettingsContext.Provider>
  );
};

//4. context içinde gerekli olan state'leri ve yardımcı fonksiyonları tanımla ve provider'a value olarak(obje) ver.
export const SettingsContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState();
  const [lang, setLang] = useState("tr");

  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const logUserIn = (credentials) => {
    axios
      .post("https://reqres.in/api/users", credentials)
      .then((res) => {
        if (
          res.data.email === "emre@wit.com.tr" &&
          res.data.first_name === "Emre"
        ) {
          setUser(res.data);
        }
      })
      .catch((error) => console.log(error.message));
  };

  const logUserOut = () => {
    setUser(null);
  };

  return (
    <settingsContext.Provider
      value={{
        user,
        lang,
        setLang,
        isLoggedIn,
        logUserOut,
        logUserIn,
      }}
    >
      {children}
    </settingsContext.Provider>
  );
};

//5. uygulamayı main.jsx'de provider component'i ile sarmala
import App from "./App.jsx";
import { SettingsContextProvider } from "./contexts/SettingsContext.jsx";

createRoot(document.getElementById("root")).render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>
);

//6. ilgili componentlerde useContext hook'una context'i vererek, gerekli olanları destruct et ve kullan
import { useContext } from "react";
import { settingsContext } from "../contexts/settingsContext";

function Header() {
  const { user, lang, isLoggedIn, logUserIn, logUserOut } =
    useContext(settingsContext);

  return (
    <header>
      <span>{user?.first_name}</span>
      <span>{lang}</span>
      {isLoggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            logUserOut();
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem("token", "kjfhalsdkjhfkjdlsahjfd");
            logUserIn({ first_name: "Emre", email: "emre@wit.com.tr" });
          }}
        >
          Log In{" "}
        </button>
      )}
    </header>
  );
}

export default Header;
