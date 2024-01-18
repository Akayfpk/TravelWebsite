'use client';
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home () {
  return(
   <> 
   <div id="hero"><Hero/></div>
   <div id="camp"><Camp/></div>
   <div id="guide"><Guide/></div>
   <div id="features"><Features/></div>
   <div id="getapp"><GetApp/></div>
   </>
  )
}