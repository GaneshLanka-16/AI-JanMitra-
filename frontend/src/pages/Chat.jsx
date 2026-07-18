import { useState, useRef, useEffect } from "react";
import { askGemini } from "../services/gemini";

import Navbar from "../components/Navbar";

import {
  Bot,
  User,
  Send,
  Sparkles,
  LoaderCircle,
  Copy,
} from "lucide-react";


export default function Chat() {


  const [question,setQuestion] = useState("");

  const [loading,setLoading] = useState(false);


  const [messages,setMessages] = useState([
    {
      sender:"ai",
      text:
`👋 Hello! I am AI Janmitra.

I can help you with:

• Government Schemes
• Eligibility Checking
• Benefits Explanation
• Required Documents
• Application Guidance

Ask me anything about government services.`
    }
  ]);



  const bottomRef = useRef(null);



  useEffect(()=>{

    bottomRef.current?.scrollIntoView({
      behavior:"smooth"
    });

  },[messages,loading]);





  async function sendMessage(){


    if(!question.trim()) return;


    const userText = question;


    const updatedMessages = [
      ...messages,
      {
        sender:"user",
        text:userText
      }
    ];


    setMessages(updatedMessages);

    setQuestion("");

    setLoading(true);



    try{


      // Send complete conversation to Gemini

      const conversation = updatedMessages
      .map((msg)=>{

        return `
${msg.sender==="user" ? "User":"AI"}:
${msg.text}
`;

      })
      .join("\n");



      const answer = await askGemini(conversation);



      setMessages(prev=>[
        ...prev,
        {
          sender:"ai",
          text:answer
        }
      ]);



    }

    catch(error){


      console.error(error);


      setMessages(prev=>[
        ...prev,
        {
          sender:"ai",
          text:
          "❌ Sorry, I cannot connect to Gemini right now."
        }
      ]);

    }


    setLoading(false);


  }






  const suggestions=[

    "Explain PM Kisan Scheme",

    "Scholarship schemes for students",

    "Ayushman Bharat eligibility",

    "Government schemes for women",

    "Startup India benefits"

  ];







return(

<>

<Navbar/>


<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-28 pb-10">


<div className="max-w-5xl mx-auto px-5">



{/* Header */}

<div className="text-center mb-8">


<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full">

<Sparkles size={18}/>

Gemini Powered AI Assistant

</div>



<h1 className="text-5xl font-bold mt-5">

AI Janmitra

</h1>



<p className="text-gray-600 mt-3 text-lg">

Your intelligent Government Scheme Assistant

</p>



</div>







{/* Suggestions */}


<div className="flex flex-wrap justify-center gap-3 mb-6">


{
suggestions.map((item)=>(

<button

key={item}

onClick={()=>setQuestion(item)}

className="
bg-white 
shadow 
px-5 
py-3 
rounded-full
hover:bg-blue-600
hover:text-white
transition
"

>

{item}

</button>

))
}



</div>









{/* Chat Box */}



<div className="
bg-white
rounded-3xl
shadow-2xl
overflow-hidden
">





<div className="
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
p-5
flex
items-center
gap-3
">


<Bot size={35}/>


<div>

<h2 className="font-bold text-xl">

AI Janmitra

</h2>


<p className="text-blue-100">

Powered by Gemini

</p>


</div>


</div>







{/* Messages */}



<div className="
h-[550px]
overflow-y-auto
p-6
bg-gray-50
">



{

messages.map((msg,index)=>(


<div

key={index}

className={`
flex mb-5 
${msg.sender==="user"
?"justify-end"
:"justify-start"}
`}

>



<div

className={`
max-w-[80%]
rounded-3xl
p-5
shadow

${msg.sender==="user"
?
"bg-blue-600 text-white"
:
"bg-white"
}

`}

>


<div className="flex gap-3">


{

msg.sender==="ai"

?

<Bot 
className="text-blue-600"
size={22}
/>

:

<User size={22}/>

}



<div>


<p className="whitespace-pre-line">

{msg.text}

</p>



{

msg.sender==="ai" &&


<button

onClick={()=>navigator.clipboard.writeText(msg.text)}

className="
flex
items-center
gap-2
mt-3
text-blue-600
"

>

<Copy size={15}/>

Copy

</button>


}



</div>


</div>


</div>


</div>


))


}







{

loading &&


<div className="flex gap-3 items-center">


<LoaderCircle 
className="animate-spin text-blue-600"
/>


<span>

Gemini is thinking...

</span>


</div>


}



<div ref={bottomRef}></div>


</div>









{/* Input */}



<div className="
border-t
p-5
flex
gap-3
">


<input


value={question}


onChange={(e)=>setQuestion(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}



placeholder="Ask anything about Government schemes..."

className="
flex-1
border
rounded-2xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-500
"

/>




<button

onClick={sendMessage}

disabled={loading}

className="
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
px-6
rounded-2xl
"

>


<Send/>

</button>



</div>







</div>


</div>


</div>


</>

);


}