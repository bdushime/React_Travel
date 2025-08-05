export default function Contact({ image, name, phone, email }) {
    return (
        <article className="contact-card">
            <img
                src={image}
                alt={`Photo of ${name}`}
                className="profile-img"
            />
            <h3 className="contact-name">{name}</h3>
            <div className="info-group">
                <img
                    src="./images/Image2.JPG"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/Image2.JPG"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    );
}
