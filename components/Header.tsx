// Jura TODO:
// Create CSS for header, import it, and add className={styles.nameOfClass} to the desired elements
// Change placeholders with actual icons
// Use CSS to target mobile/tablet width and hide neccessary HTML elements and showcase the other elements 
// You can change the HTML structure if you deem it neccessary

const Header: React.FunctionComponent  = () => {

    return (
        <header>
            {/*  PC elements */}
            <div>
                <p>Replace with logo image</p>
                <nav>
                    <div>
                        <p>Explore</p>
                        <label htmlFor="search">Search</label>
                        <input id="search" name="search" type="text" />
                    </div>
                    {/* Placeholder for icons */}
                    <div>
                        <p>+</p>
                        <p>Bell</p>
                        <p>Share</p>
                    </div>
                    {/* Add a placeholder image and style it, i will later make it dynamic to fetch user image */}
                    <div>
                        <p>Profile picture</p>
                    </div>
                </nav>
            </div>
            {/* Mobile elements */}
            <div>
                <p>Hamburger icon</p>
                {/** Todo -> Create design for the hamburger menu when open */}
            </div>
        </header>
    )
}

export default Header