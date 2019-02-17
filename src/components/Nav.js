import React from 'react'

export default function Nav () {
    return (
    <nav>
        <figure><img src="https://firebasemx.com/static/media/firemx.018fbe39.png" alt="" /></figure>
        <div class="categories">
            <button>
                Reactions
            </button>
            <button>
                Entertainment
            </button>
            <button>
                Sports
            </button>
            <button>
                Stickers
            </button>
            <button>
                Artists
            </button>
            <button>
                icon
            </button>
        </div>
        <div class="upload">
            <button>
                Upload
            </button>
            <button>
                Create
            </button>
        </div>
        <div class="user">
            <img id="photoURL" src="https://media.giphy.com/avatars/default3.gif" alt="" />
            <span id="username" >
                Login
            </span>
        </div>
    </nav>
    )
}

