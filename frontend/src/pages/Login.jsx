import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";


export default function Login(){


const navigate = useNavigate();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");



function handleLogin(e){

e.preventDefault();


// Demo authentication

localStorage.setItem(
"user",
JSON.stringify({
email:email
})
);


// redirect

navigate("/dashboard");


}



return(


<div className="
min-h-screen
flex
items-center
justify-center
px-6
">


<div className="
glass-card
w-full
max-w-md
p-10
">


<div className="
text-center
mb-8
">


<FaUserCircle

className="
mx-auto
text-6xl
text-blue-600
mb-4
"

/>


<h1 className="
text-3xl
font-black
">

Welcome Back

</h1>


<p className="
text-gray-500
mt-2
">

Login to AI Janmitra

</p>


</div>





<form onSubmit={handleLogin}>


<div className="
relative
mb-5
">


<FaUserCircle

className="
absolute
left-4
top-4
text-gray-400
"/>



<input

type="email"

required

placeholder="Email Address"

className="
w-full
border
rounded-xl
p-3
pl-11
"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

/>


</div>





<div className="
relative
mb-6
">


<FaLock

className="
absolute
left-4
top-4
text-gray-400
"

/>



<input

type="password"

required

placeholder="Password"

className="
w-full
border
rounded-xl
p-3
pl-11
"

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

/>


</div>





<button

className="
primary-btn
w-full
text-center
"

type="submit"

>


Login to AI Janmitra


</button>



</form>





<p className="
text-center
mt-6
text-gray-600
">


Don't have an account?


<Link

to="/register"

className="
text-blue-600
font-bold
ml-2
"

>

Register

</Link>


</p>



</div>


</div>


);


}