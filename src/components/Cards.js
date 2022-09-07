import '../css_comp/Cards.css';

function	Cards(props)
{
	return (
		<div className="cards">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="card-link">{props.link}</a>
			</div>
		</div>
	);
}

export default Cards;
