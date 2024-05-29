import react from 'react';
import {SPA_PATH} from '../../const.js'
export default function Header({setSpaPath}){

    function setRoute(path){
        setSpaPath(path);
    }

    return(
        <header className={"bg-dark d-flex align-items-center justify-content-between p-2"}>
            <img src={"./logo.svg"} alt={"ReNews logo"}/>
                <div className="d-flex flex-row flex-wrap">
                        <btn className="btn btn-dark" onClick={() => setRoute(SPA_PATH.LOGIN)}>Login</btn>
                            <btn className="btn btn-dark" onClick={() => setRoute(SPA_PATH.HOME)}>Inicio</btn>
                            <btn className="btn btn-dark" onClick={() => setRoute(SPA_PATH.FEED)}>Feed</btn>
                            <btn className="btn btn-dark" onClick={() => setRoute(SPA_PATH.PROFILE)}>Perfil</btn>
                            <btn className="btn btn-dark" onClick={() => setRoute(SPA_PATH.PENDING)}>Pendientes</btn>
                    <img width={25} height={25} alt={"avatar"} src={"./default-profile-picture.jpg"}
                         className={"rounded-circle m-2"}/>
                </div>
        </header>
    );
}