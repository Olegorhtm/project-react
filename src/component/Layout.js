
import l from "./layout.module.css";

const Layout = ({title, descr, urlBg=null, colorBg=null}) => {
	if (!(title && descr)) return null;
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
			                <p> {descr} </p>
			            </div>
			        </article>
			    </div>
			</section>
		);

};


export default Layout;