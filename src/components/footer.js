import React from "react"
import { GoMarkGithub } from "react-icons/go"


const Footer = () => {

    return (
        <footer>
            <div style={{
                display: `flex`,
                flexFlow: `column nowrap`,
                alignItems: `center`,
            }}>
                Nicholas Flanders
            <a href="https://github.com/ngflanders/ngflanders.github.io">
                    <GoMarkGithub style={{ fontSize: `2rem`,display:`block`,margin:`0 auto` }} />
                    <span>View the source for this site</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer
