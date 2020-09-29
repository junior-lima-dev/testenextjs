import React from 'react';
import Link from 'next/link';

export default function UsersList() {
    return (

        <div className="userlist-container">
            <header>
                <h1>Lista de usuários do GitHub</h1>
            </header>

            <ul>
                <li>
                    <Link href="https://google.com">
                        <a>
                        <img src="https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"></img>
                        <strong>Nome</strong>
                        <p>fulano de tal</p>
                        </a>
                    </Link>

                </li>

                <li>
                    <Link href="https://google.com">
                        <a>
                        <img src="https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"></img>
                        <strong>Nome:</strong>
                        <p> fulano de tal</p>
                        </a>
                    </Link>

                </li>

                <li>
                    <Link href="https://google.com">
                        <a>
                        <img src="https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"></img>
                        <strong>Nome:</strong>
                        <p>fulano de tal</p>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="https://google.com">
                        <a>
                        <img src="https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"></img>
                        <strong>Nome:</strong>
                        <p>fulano de tal</p>
                        </a>
                    </Link>

                </li>

            </ul>



            <style jsx>{`
    
                .userlist-container {
                    width: 100%;
                    max-width: 1180px;
                    padding: 0 30px;
                    margin: 32px auto;
                }

                header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                header h1{
                    font-size: 40px;
                }

                .userlist-container ul {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 24px;
                    list-style: none;
                }
                
                .userlist-container ul li{
                    background: black;
                    padding: 24px;
                    border-radius: 8px;
                    position: relative;
                }

                .userlist-container ul li strong{
                    display: block;
                    color: #41414d;
                }
                
                .userlist-container ul li a img{
                    width: 70px;
                    heigth: 70px;
                    border-radius: 8px;
                }

                .userlist-container ul li p{
                    color: #737380;
                    line-heigth: 21px;
                    font-size: 16px;
                }

                .userlist-container ul li a:link{
                    text-decoration: none;    
                }

                .userlist-container ul li a{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;    
                }
                
            `}</style>
        </div>

    );
}

