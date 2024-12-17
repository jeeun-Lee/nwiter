import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../routes/firebase';
import Tweet from './tweets';
import { Unsubscribe } from 'firebase/auth';

export interface ITweet{
    tweet:string,
    userId:string,
    username:string,
    createdAt:number
}
const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;
export default function TimeLine() {
    const [tweets,setTweet] = useState<ITweet[]>([]);
   
    useEffect(()=>{
        let unsubscribe : Unsubscribe | null = null;
        const fetchTweets = async() =>{
            const tweetsQuery = query(
                collection(db,"tweets"),
                orderBy("createdAt","desc")
            );
            // const snapshot = await getDocs(tweetsQuery);
            // const tweets = snapshot.docs.map((doc) =>{
            //     const {tweet, userId,username, createdAt}  = doc.data()
            //     return{
            //         tweet,
            //         userId,
            //         username,
            //         createdAt,
            //         id:doc.id
            //     }
            // });
    
            unsubscribe =  await onSnapshot(tweetsQuery,(snapshot) =>{
                const tweets = snapshot.docs.map((doc) =>{
                    const {tweet, userId,username, createdAt}  = doc.data()
                    return{
                        tweet,
                        userId,
                        username,
                        createdAt,
                        id:doc.id
                    }
                });
                setTweet(tweets);
            })
        };
        fetchTweets();
        return () =>{
            unsubscribe && unsubscribe();
        }
    },[])
  return <Wrapper>{tweets.map(tweet => <Tweet key={tweet.id}{...tweet} /> )}</Wrapper>
}
