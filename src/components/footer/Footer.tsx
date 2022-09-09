import "./footer.css"

export default function Footer(): JSX.Element {

    return (
        <footer className="landing-footer">
            <h3 className="footer-txt">
                made by <a className="footer-link" href="https://abhijit.super.site">Abhijit</a>
            </h3>
            <p className="footer-socials">
                <a className="footer-link" href="https://github.com/abhijitdotsharma/popcorn">GitHub</a>
                <span className="footer-link-gap">||</span>
                <a className="footer-link" href="https://linkedin.com/in/abhijitdotsharma">LinkedIn</a>
                <span className="footer-link-gap">||</span>
                <a className="footer-link" href="https://abhijit.super.site">Hire me ?</a>
            </p>
        </footer>
    )
}