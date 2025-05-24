import imgLogo from "./images/chef-logo.jpeg";
export default function Header(){
    return(
        <header >
            <img src={imgLogo}/>
            <h1>Chef Claude</h1>
        </header>
    )
}