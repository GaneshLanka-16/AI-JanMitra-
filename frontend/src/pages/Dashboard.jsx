import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import {
  Database,
  MapPinned,
  Building2,
  Layers3,
  Sparkles,
  FileText,
  LoaderCircle,
} from "lucide-react";


export default function Dashboard() {

  const [stats, setStats] = useState({
    total_schemes: 0,
    states: 0,
    ministries: 0,
    categories: 0,
  });

  const [latest, setLatest] = useState([]);

  const [loading, setLoading] = useState(true);



  const API_URL = "https://ai-janmitra-jovw.onrender.com";


  useEffect(() => {

    loadDashboard();

  }, []);



  const loadDashboard = async () => {

    try {

      setLoading(true);


      const statsResponse = await axios.get(
        `${API_URL}/dashboard/stats`
      );


      const latestResponse = await axios.get(
        `${API_URL}/dashboard/latest`
      );


      console.log(
        "Dashboard Stats:",
        statsResponse.data
      );


      console.log(
        "Latest Schemes:",
        latestResponse.data
      );


      setStats(statsResponse.data);

      setLatest(latestResponse.data);


    }
    catch(error){

      console.log(
        "Dashboard Error:",
        error
      );

    }
    finally{

      setLoading(false);

    }

  };



  const cards = [

    {
      title:"Total Schemes",
      value:stats.total_schemes,
      icon:<Database size={34}/>,
      color:"from-blue-500 to-blue-700"
    },


    {
      title:"States Covered",
      value:stats.states,
      icon:<MapPinned size={34}/>,
      color:"from-green-500 to-green-700"
    },


    {
      title:"Ministries",
      value:stats.ministries,
      icon:<Building2 size={34}/>,
      color:"from-purple-500 to-purple-700"
    },


    {
      title:"Categories",
      value:stats.categories,
      icon:<Layers3 size={34}/>,
      color:"from-orange-500 to-red-500"
    }

  ];




  return (

    <>

    <Navbar/>


    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-purple-100
      pt-28
      pb-12
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">



        <div className="
          text-center
          mb-10
        ">


          <div className="
            inline-flex
            items-center
            gap-2
            bg-blue-100
            text-blue-700
            px-5
            py-2
            rounded-full
          ">

            <Sparkles size={18}/>

            AI Analytics Dashboard

          </div>



          <h1 className="
            text-5xl
            font-black
            mt-5
          ">

            AI Janmitra Dashboard

          </h1>



          <p className="
            text-gray-600
            mt-4
            text-lg
          ">

            Real-time Government Scheme Analytics

          </p>


        </div>





        {
          loading ?

          <div className="
            flex
            justify-center
            items-center
            gap-3
            text-blue-600
            text-xl
          ">

            <LoaderCircle
              className="animate-spin"
            />

            Loading Dashboard...

          </div>


          :

          <>


          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">


          {
            cards.map((card)=>(

              <div
                key={card.title}
                className={`
                  bg-gradient-to-r
                  ${card.color}
                  rounded-3xl
                  shadow-xl
                  text-white
                  p-7
                `}
              >


                <div className="
                  flex
                  justify-between
                  items-center
                ">


                  <div>


                    <p className="
                      text-white/80
                    ">

                      {card.title}

                    </p>


                    <h2 className="
                      text-4xl
                      font-black
                      mt-3
                    ">

                      {card.value}

                    </h2>


                  </div>


                  {card.icon}


                </div>


              </div>


            ))
          }


          </div>





          <div className="
            bg-white
            rounded-3xl
            shadow-xl
            mt-10
            p-8
          ">


            <h2 className="
              text-3xl
              font-bold
              mb-6
            ">

              Latest Government Schemes

            </h2>



            {
              latest.length === 0 ?

              <p className="text-gray-500">

                No scheme data available.

              </p>


              :


              <div className="space-y-5">


              {
                latest.map((item,index)=>(


                  <div
                    key={index}
                    className="
                      flex
                      justify-between
                      items-center
                      border
                      rounded-2xl
                      p-5
                      hover:bg-blue-50
                    "
                  >


                    <div className="
                      flex
                      gap-4
                      items-center
                    ">


                      <FileText
                        className="text-blue-600"
                      />


                      <div>


                        <h3 className="font-bold">

                          {item.scheme_name}

                        </h3>


                        <p className="text-gray-500">

                          {item.ministry}

                        </p>


                      </div>


                    </div>



                    <span className="
                      bg-blue-100
                      text-blue-700
                      px-4
                      py-2
                      rounded-full
                    ">

                      {item.state}

                    </span>


                  </div>


                ))
              }


              </div>


            }


          </div>





          <div className="
            bg-gradient-to-r
            from-blue-600
            to-purple-700
            rounded-3xl
            shadow-xl
            mt-10
            p-8
            text-white
          ">


            <h2 className="
              text-3xl
              font-bold
            ">

              AI Insights

            </h2>


            <p className="
              mt-4
              text-blue-100
            ">

              AI Janmitra combines OCR,
              Gemini AI, Government Scheme Search,
              Eligibility Prediction and Intelligent
              Recommendations into one unified citizen
              assistance platform.

            </p>


          </div>


          </>

        }


      </div>


    </div>


    </>

  );

}