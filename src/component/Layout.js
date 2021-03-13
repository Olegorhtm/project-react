
import l from "./layout.module.css";

const Layout = ({title, urlBg=null, colorBg=null, children}) => {
	
	if (!(title)) return null;
	const style = {};
if (urlBg) { style.backgroundImage = `url(${urlBg})` };
if (colorBg) { style.backgroundColor = colorBg };
	return(
			<section
		      style={{ background: urlBg ? `url(${urlBg})` : colorBg }}
		      className={l.root}
    		>
			    <div className={l.wrapper}>
			        <article>
			            <div className={l.title}>
			                <h3>{title}</h3>
			                <span className={l.separator}></span>
			            </div>
			            <div
			             className={`${l.desc} ${l.full}`}>
			                 {children} 
			            </div>
			        </article>
			    </div>
			</section>
		);

};


export default Layout;