const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid p-3 mb-2 bg-danger-subtle text-danger-emphasis ">
                 <a class="navbar-brand" href="#">
      <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YTA4M2EzYzAwODE5MTk3MTg5M2RmZmJkOTBkZTU6ZmlsZV8wMDAwMDAwMGE1ZWM2MWZiYThiYzAxOTdiMzUxZjUyYiIsInRzIjoiNDg2MzE0IiwicCI6InB5aSIsInNpZyI6IjVhYmYxZTBhYWIxMGEyNjZjNzI5MjJmODlkMGM3ZGU2MDU1MGU2NzYyOGQ3ODMyZmM3YjA3ZmRhNzRjMjRkOGIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" alt="Bootstrap" width="200" height="50"/>
    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul class="nav justify-content-end">
                   
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">CLASSES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">TRAINING</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">LOCATIONS</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default Navbar;