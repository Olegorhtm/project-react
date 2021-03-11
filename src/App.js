import Header from "./component/Header.js";
import Layout from "./component/Layout.js";
import Footer from "./component/Footer";
import backImg from "./assets/photo.jpg";

 const App = () => {
 	const sectionStyle = {
        backgroundColor : props.colorBg,
        backgroundImage : `url(${props.urlBg}`)
    }
 
  return (
  <div>
  	<Header 
  		title="Hello React"
  		descr="This is block Headers"
  	/>
  	<Layout
  		title="Layout1"
  		descr="This is block Layout 1"
  		urlBg={backImg}
  	 />
  	<Layout
  		title="Layout2"
  		descr="This is block Layout 2"
  		colorBg="red"
  	 />
  	<Layout
  		title="Layout3"
  		descr="This is block Layout 3"
  		urlBg={backImg}
  	 />
  	<Footer />
  </div>
  );
};

export default App;