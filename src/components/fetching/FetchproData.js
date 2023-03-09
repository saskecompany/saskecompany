const FetchProData = prodata => prodata.map((data) => <li key={data.id}><a className="prolink" href={data.link} target="_blank" rel="noreferrer"><h3 className="prodep">{data.dep}</h3><img className="proimage" src={data.img} alt={ data.alt } /><p className="prodes">{data.des}</p></a></li>);

export default FetchProData;