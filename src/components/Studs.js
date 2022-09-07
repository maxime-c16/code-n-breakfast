import '../css_comp/Studs.css';

function	Studs(props)
{
	return (
		<div className="studs">
			<div className="stud_body">
				<h5 className="stud_login">{props.login}</h5>
				<p className="stud_name">{props.name}</p>
				<p className="stud_email">{props.email}</p>
				<p className="stud_coalition">{props.coalition}</p>
				<p className='black_hole'>black hole remaining :</p>
				<p className="stud_bh">{props.bh}</p>
				<p><a href="#" className="stud_link">{props.link}</a></p>
			</div>
		</div>
	)
}

export default Studs;
