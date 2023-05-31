// Jura TODO:
// Create CSS for header, import it, and add className={styles.nameOfClass} to the desired elements
// Change placeholders with actual icons

const Header: React.FunctionComponent  = () => {
    return (
        <header>
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
        </header>
    )
}

export default Header