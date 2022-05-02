import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }} >
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
          
      */}
      <Link to='/' style={{padding: 20, color:"red", fontWeight:"bold"  }}>Home</Link>
      <Link to='/about' style={{padding: 20, color:"red", fontWeight:"bold" }}>About</Link>
      <Link to='/products' style={{padding: 20, color:"red", fontWeight:"bold" }}>Products</Link>
      <Link to='/products/men' style={{padding: 20, color:"red", fontWeight:"bold" }}>Men</Link>
      <Link to='/products/women' style={{padding: 20, color:"red", fontWeight:"bold" }}>Women</Link>
      <Link to='/products/kids' style={{padding: 20, color:"red", fontWeight:"bold" }}>Kids</Link>
      <Link to='/products/homedecor' style={{padding: 20, color:"red", fontWeight:"bold" }}>Home</Link>
    </nav>
  );
};
