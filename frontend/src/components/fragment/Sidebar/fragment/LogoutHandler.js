export default function LogoutHandler() {
    if(window.confirm("Are you sure to logout?")) {
        window.location = '/login'
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("position");
        localStorage.removeItem("image");
    }
}
