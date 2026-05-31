import { useEffect, useRef, useState } from "react";
import { supabase } from "../services/supabase";

function Home(){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser();
    }, [])

    const getCurrentUser = async () => {
        const {data : {user}} = await supabase.auth.getUser();
        
        setUser(user);
        setLoading(false);
    
    };

    const handleLogout = async () => {
        const {error} = await supabase.auth.signOut();

        if (error) {
            alert(error.message)
            return;
        };
        
        setUser(null)
    };

    if (loading){
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-xl font-semibold">Loading...</h1>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">

        {/* HERO */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fadeUp">
                <span className="bg-gradient-to-r from-[#5B913B] to-[#7CCF4A] text-transparent bg-clip-text">
                    Dasturchi
                </span>
            </h1>

            <p className="mt-6 text-zinc-400 max-w-md">
                Master Data Structures & Algorithms. Prepare for top tech interviews.
            </p>

            <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition">
                Start Learning!
            </button>
        </section>

        {/* COURSES SECTION */}
        <section className="min-h-screen px-10 py-20">
            
            <h2 className="text-3xl font-semibold text-white mb-10">
            Courses
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition hover:scale-[1.02]">
                <h3 className="text-lg font-semibold">DSA Basics</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                Learn fundamentals of arrays, loops, and recursion.
                </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition hover:scale-[1.02]">
                <h3 className="text-lg font-semibold">Data Structures</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                Stacks, queues, linked lists, trees.
                </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition hover:scale-[1.02]">
                <h3 className="text-lg font-semibold">Advanced DSA</h3>
                <p className="text-zinc-400 mt-2 text-sm">
                Graphs, DP, backtracking, and interview patterns.
                </p>
            </div>

            </div>
        </section>

        </div>
  );
}

export default Home;