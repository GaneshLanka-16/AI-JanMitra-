import { Link } from "react-router-dom";

import {
  FaRobot,
  FaFileUpload,
  FaSearch,
  FaChartLine,
  FaBrain,
  FaShieldAlt,
  FaUserLock
} from "react-icons/fa";


export default function Home() {


return (

<div className="page-animation">



{/* HERO SECTION */}

<section className="
min-h-[85vh]
flex
items-center
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
">



{/* LEFT SIDE */}

<div>



<div className="
inline-flex
items-center
gap-3
bg-blue-100
text-blue-700
px-5
py-2
rounded-full
font-semibold
mb-6
">


<FaRobot/>

AI Powered Government Assistant


</div>





<h1 className="
text-5xl
md:text-6xl
font-black
leading-tight
">


Discover Government Schemes


<br/>


<span className="ai-text">

With Artificial Intelligence

</span>


</h1>





<p className="
mt-6
text-lg
text-gray-600
leading-relaxed
">


AI Janmitra helps citizens find suitable
government welfare schemes through AI-powered
eligibility analysis, Aadhaar profile extraction,
and personalized recommendations.


</p>






{/* BUTTONS */}


<div className="
flex
gap-5
mt-8
flex-wrap
">


<Link to="/login">

<button className="
primary-btn
flex
items-center
gap-2
">

<FaUserLock/>

Login

</button>

</Link>





<Link to="/register">

<button className="
px-6
py-3
rounded-xl
border
border-blue-600
text-blue-600
font-semibold
hover:bg-blue-50
transition
">

Create Account

</button>

</Link>





<Link to="/upload">


<button className="
px-6
py-3
rounded-xl
bg-green-600
text-white
font-semibold
flex
items-center
gap-2
hover:bg-green-700
transition
">


<FaFileUpload/>

Upload Aadhaar


</button>


</Link>



</div>


</div>






{/* RIGHT AI CARD */}


<div>


<div className="
glass-card
p-8
">


<div className="
bg-gradient-to-r
from-blue-600
to-purple-600
rounded-3xl
p-8
text-white
">


<FaBrain

className="
text-6xl
mb-5
"

/>



<h2 className="
text-3xl
font-bold
">

Janmitra AI

</h2>



<p className="
mt-3
opacity-90
">

Your intelligent assistant for
government benefits.

</p>


</div>





<div className="
grid
grid-cols-2
gap-5
mt-6
">



<StatCard

number="1200+"

text="Government Schemes"

/>



<StatCard

number="36"

text="States Covered"

/>



<StatCard

number="50+"

text="Ministries"

/>



<StatCard

number="AI"

text="Smart Analysis"

/>



</div>



</div>



</div>


</div>


</section>







{/* HOW IT WORKS */}


<section className="
py-20
">


<div className="
max-w-6xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-black
text-center
mb-12
">


How AI Janmitra Works


</h2>





<div className="
grid
md:grid-cols-3
gap-8
">



<FeatureCard

icon={<FaFileUpload/>}

title="Upload Aadhaar"

text="Extract user information securely using AI OCR technology."

/>




<FeatureCard

icon={<FaSearch/>}

title="AI Eligibility Check"

text="Analyse user profile and match suitable government schemes."

/>




<FeatureCard

icon={<FaChartLine/>}

title="Smart Recommendations"

text="Receive personalized schemes with reasons and required documents."

/>



</div>



</div>


</section>









{/* ABOUT AI SECTION */}


<section className="
pb-20
">


<div className="
max-w-6xl
mx-auto
px-6
">


<div className="
glass-card
p-10
text-center
">


<FaShieldAlt

className="
mx-auto
text-5xl
text-blue-600
mb-5
"

/>



<h2 className="
text-3xl
font-bold
">

Making Government Benefits Accessible

</h2>



<p className="
mt-4
text-gray-600
max-w-3xl
mx-auto
">


AI Janmitra combines Artificial Intelligence,
FastAPI, OCR and Gemini AI to simplify access
to welfare schemes for every citizen.


</p>



<Link to="/about">


<button className="
mt-6
primary-btn
">


Know More About AI Janmitra


</button>


</Link>


</div>


</div>


</section>





</div>

);

}







function FeatureCard({icon,title,text}){


return(

<div className="
glass-card
p-7
hover:-translate-y-2
transition
">


<div className="
text-blue-600
text-4xl
mb-5
">

{icon}

</div>



<h3 className="
text-xl
font-bold
mb-3
">

{title}

</h3>



<p className="
text-gray-600
">

{text}

</p>



</div>


);


}






function StatCard({number,text}){


return(

<div className="
bg-white
shadow-md
rounded-xl
p-5
text-center
">


<h3 className="
text-3xl
font-black
text-blue-600
">

{number}

</h3>


<p className="
text-gray-600
mt-2
">

{text}

</p>


</div>

);


}