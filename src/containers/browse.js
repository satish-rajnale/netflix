import { SelectProfileContainer } from "./profiles";
import {FirebaseContext} from '../context/firebase';
import { useContext, useState, useEffect } from "react";
import {Loading } from '../components';

export function BrowseContainer ({ slides}){
    const { firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 3000);
    }, [profile.displayName])

    return  profile.displayName ? ( loading ? <Loading src={user.photoURL}/> : null) : (<SelectProfileContainer user={user} setProfile={setProfile}/>);
}