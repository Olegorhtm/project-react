
import l from "./layout.module.css";

const Layout = (props) => {

	 	const sectionStyle = {
        backgroundColor : props.colorBg,
        backgroundImage : `url(${props.urlBg})`
    };
 
	return(
			<section
      style={{ background: props.urlBg ? `url(${props.urlBg})` : props.colorBg }}
      className={s.root}
    >
			    <div className={l.wrapper}>
			        <article>
			            <div className={l.title}>
			                <h3>{props.title}</h3>
			                <span className={l.separator}></span>
			            </div>
			            <div
			             className={`${l.desc} ${l.full}`}>
			                <p> {props.descr} </p>
			            </div>
			        </article>
			    </div>
			</section>
		);

};


export default Layout;