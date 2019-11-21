import React from 'react';
import Slide from "react-reveal/Slide"
import './Faq.css';

class Faq extends React.Component {
    render() {
        return(
            <Slide left>
                <div className="faq">
                    <div className="container">
                        <h1>FAQ</h1>
                        <h3>You ask, I answer</h3>
                        <h5>What is the software requirements?</h5>
                        <p>As I write below every project. All you need is Cubase Pro at least version 9.5 with all the content installed. It means instruments such as Halion Sonic or Groove Agent SE will be able to load the standard sounds such as drum kits and other media. I came across few cases where some of my users had to load the sounds manually (Groove Agent SE) or did not have the Padshop installed. This is caused by faulty Cubase installation. Find the missing sound libraries on your hard drives manually.</p>
                        <h5>Can I modify your bike and still keep the warranty?</h5>
                        <p>Of course YES! That is the general idea of this service. All projects are royalty free and you are free to use them, modify them and change whatever you want. However be creative - you don't want your song to be the same as some other producers that bought the same project, right? :)</p>
                        <h5>I have a big family and we could use a tandem bike but you don't have this type of bike in your shop</h5>
                        <p>Well, yes but everything can be done </p>
                        <h5>How often do you add new bikes?</h5>
                        <p>I try to do it as frequent as possible. Usually one a week. That is why you should definitely subscribe to my mailing list, my Youtube channel and be up to date with the latest projects, tutorials and other special Cubase content.</p>
                        <h5>Will you have subscription service?</h5>
                        <p>I am working on it. You will be able to access to all the content, projects old and new, special tutorials, step by step videos and some extra goodies just with one monthly or annually subscription. More info coming soon.</p>
                        <h5>I love your stuff, can you make a personalized bike just for me?</h5>
                        <p>Sure I can. This is my work. Please contact me and tell me what you have in mind.</p>
                        <h5>I have problems with my payment, what should I do?</h5>
                        <p>This website is using third party secure payment system provided by the WIX platform that should work flawlessly. If there are any problems please let me know and I will resolve the problem with the companies that are handling the payments.
                        If you for some reason could not download your purchased project let me know. I will send it to you directly.</p>

                    </div>
                </div>
            </Slide>
        )
    }
}

export default Faq;