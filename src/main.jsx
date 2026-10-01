import React,{useState} from 'react';import{createRoot}from'react-dom/client';import'./index.css';
const shoes=[
{id:1,name:"White Casual Sneaker",price:70,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"},
{id:2,name:"MACTREE Men's Mid Top Ankle Boots",price:90,image:"https://images.unsplash.com/photo-1608256246200-53e3c4f4e8f5?auto=format&fit=crop&w=700&q=80"},
{id:3,name:"Campus Men's OG-03 Sneakers",price:75,image:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=700&q=80"},
{id:4,name:"Campus Men's Sneakers",price:50,image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=80"},
{id:5,name:"ASIAN Men's Sports Shoes",price:68,image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80"},
{id:6,name:"U.S. POLO ASSN. Mens PanalSneaker",price:99,image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=80"},
{id:7,name:"ASIAN Men's Thar-13 Sneaker",price:120,image:"https://images.unsplash.com/photo-1554130841-2a9e7a7d5c8c?auto=format&fit=crop&w=700&q=80"},
{id:8,name:"ASIAN Men's AIRWEAVE-02 Sports Shoes",price:40,image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80"}];
function App(){const[cart,setCart]=useState([]);
const add=s=>setCart(c=>{const x=c.find(i=>i.id===s.id);return x?c.map(i=>i.id===s.id?{...i,quantity:i.quantity+1}:i):[...c,{...s,quantity:1}]});
const dec=id=>setCart(c=>c.map(i=>i.id===id?{...i,quantity:i.quantity-1}:i).filter(i=>i.quantity>0));
const inc=id=>setCart(c=>c.map(i=>i.id===id?{...i,quantity:i.quantity+1}:i));
const total=cart.reduce((n,i)=>n+i.price*i.quantity,0);
return <div className="app"><header><div className="logo">♞</div><nav><a href="#home">Home</a><a href="#categories">Categories</a><a href="#about">About Us</a></nav></header><main>
<section className="hero" id="home"><div><small>REACTJS HOOKS</small><h1>Find your next favorite pair.</h1><p>Browse our shoe collection and build your shopping cart using React's useState hook.</p></div><b>Cart: {cart.reduce((n,i)=>n+i.quantity,0)} items</b></section>
<section className="layout" id="categories"><div><div className="heading"><h2>Featured Shoes</h2><span>{shoes.length} products</span></div><div className="grid">{shoes.map(s=><article className="card" key={s.id}><img src={s.image} alt={s.name}/><h3>{s.name}</h3><div className="bottom"><strong>${s.price}</strong><button onClick={()=>add(s)}>Add to Cart</button></div></article>)}</div></div>
<aside><div className="heading"><h2>Cart</h2><span>{cart.length} items</span></div>{!cart.length?<div className="empty">🛒<p>Your cart is empty</p><small>Add a shoe to see it here.</small></div>:<div className="items">{cart.map(i=><div className="item" key={i.id}><img src={i.image} alt=""/><div><h3>{i.name}</h3><span>${i.price}</span><div className="qty"><button onClick={()=>dec(i.id)}>−</button><b>{i.quantity}</b><button onClick={()=>inc(i.id)}>+</button></div></div></div>)}</div>}<div className="total"><span>Total:</span><strong>${total.toFixed(2)}</strong></div></aside></section>
<section className="about" id="about"><h2>About Us</h2><p>A React shopping cart demonstrating state management with the useState hook.</p></section></main></div>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);