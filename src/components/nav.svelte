<script>
    let links = [ "/photography", "/about-me", "/blog", "/contact"]
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="pagenav">
    <a href="/" class="Corner-Title">Li Yu</a>

    <nav class="navbar">
        <a href={links[0]}>
            Photography
        </a>
    
        <a href={links[1]}>
            About
        </a>
    
        <a href={links[2]}>
            Blog
        </a>
    
        <a href={links[3]}>
            Contact
        </a>

        <a href="https://www.instagram.com/liyuekko/">
            <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
    </nav>
</div>

<style>
    .pagenav {
		background-color: #353535;
		height: 10vh;
		width: 100%;
		display: flex;
        justify-content: flex-end; /* Align items to the right */
        align-items: center; /* Align items vertically */
		position: relative; /* Added */
	}

    a{
        margin: 1rem;
        transition: font-size 0.3s, transform 0.3s; /* Added transform to include scale transition */
    }

    a:hover {
        transform: scale(1.1); /* Scale up to 1.1 times on hover */
    }

    .Corner-Title {
		margin: 0; /* Changed */
		color: white;
		font-size: 5.75rem; /* Changed */
        position: absolute;
        left: 3rem; /* Adjust as needed */
	}

    .navbar {
		display: flex;
		padding: 1.875rem;
		color: white;
		font-size: 1.875rem;
        margin: 1rem 0; /* Add spacing around the buttons */
	}

    @media screen and (max-height: 882px) {
		.Corner-Title {
			font-size: 2rem; /* Adjusted */
			left: 2rem; /* Adjusted */
		}
	}
</style>