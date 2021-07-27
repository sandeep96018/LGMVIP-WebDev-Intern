const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container-fluid">
  <a className="navbar-brand"id="brnd">USERCARD</a>
  <button onClick={clicked} className="btn btn-outline-success d-flex">Get Users Details</button>

</div>
</nav> 
  
    );
}
export default Navbar;