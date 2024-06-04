import React from "react";
import {Header} from "../../components/Header";
import Footer from "../../components/Footer";

const CommunityGuidelines = () => {
  return (
    <main className="bg-black-100 text-white min-h-screen p-2 mx-auto">
      <Header />
      <div className="container mx-auto p-2 mx-auto mt-20">
          <h1 className="text-4xl text-yellow-500 mb-16 text-center font-bold">Community Guidelines & Content</h1>
        <div className="space-y-6 text-xs font-light">
          <p>
            These content and community guidelines govern your use of our website located at <a href="https://dudepro.app/" className="text-blue-400">https://dudepro.app/</a> and/or the DudePro mobile application (collectively, the “Platform”) made available by DudePro Internet Private Limited (“DudePro”, “Company”, “we”, “us” and “our”), a private company established under the laws of India. The terms “you” and “your” refer to the user of the Platform.
          </p>
          <p>
            These Guidelines are to be read with the DudePro <a href="https://www.dudepro.app/terms-of-service/" className="text-blue-400">Terms of Use</a> and the DudePro <a href="https://www.dudepro.app/privacy-policy/" className="text-blue-400">Privacy Policy</a> (collectively, “Terms”). The capitalized words used in these guidelines shall have the meaning given to such words in the Terms.
          </p>
          <p>
            Please note that we may change these Guidelines from time to time and we reserve the right to do so.
          </p>
          <p>
            Our platform connects you with people and helps you share your ideas, opinions, and emotions with the world. We believe in the freedom of expression and in empowering people to fully express themselves in a new-age digital society. The users of our Platform are diverse and multilingual, and the content and comments they post here reflect their culture and belief. The community here is receptive to a variety of content, but the Platform is accessed by a variety of audiences, including minors. Hence, to ensure that all our users follow standard practice and for their own safety, we have put in place some guidelines and restrictions.
          </p>

          {/* Content Guidelines */}
          <h2 className="text-2xl font-semibold mt-10">Content Guidelines</h2>

          <h3 className="text-xl font-semibold mt-6">a. Adherence to Applicable Laws</h3>
          <p>
            All the content, including without limitation, content that is uploaded, posted, commented on, or shared by you on our Platform, must adhere to the laws of the Republic of India, including without limitation, the Indian Penal Code, 1860 and, the Information Technology Act, 2000 along with all rules and amendments made under such laws. We cooperate with legal authorities in cases of breach of applicable laws.
          </p>
          <p>Remember, simply comply with the law and don’t do anything that could land you into trouble.</p>

          <h3 className="text-xl font-semibold mt-6">b. Nudity and Pornography</h3>
          <p>
            We allow content that has limited sexual imagery, provided it is posted for artistic value, educational purposes, awareness, protest, humor, or satirical purposes. Content that contains the following is against these Guidelines:
          </p>
          <ul className="list-disc list-inside ml-5">
            <li>Sexually explicit, pornographic, or nude material or images/videos that expose private parts (sexual organs);</li>
            <li>Videos or images of people in compromising positions or those with sexual or fetish or erotic intent;</li>
            <li>Sextortion or revenge pornography;</li>
            <li>Bestiality or zoophilia;</li>
            <li>Content that exploits or endangers any person (for example, listing of phone numbers, or posting of pictures encouraging or soliciting prostitution or escort services);</li>
            <li>Child pornography (including without limitation, creation, transmission or browsing of child pornography); or</li>
            <li>Content on rape, gang rape, and molestation.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">c. Harassment or Bullying</h3>
          <p>
            Try to ignore any content that you may find petty and annoying. But do report any content that harasses another person or degrades or shames anyone.
          </p>
          <p>
            Posting abuses or curse words, morphed images, malicious recordings, objectifying someone, making sexual advances, or otherwise engaging in sexual misconduct will not be tolerated. Similarly, extorting or blackmailing any person is prohibited. If someone blocks you from their account, do not try to contact them from another account.
          </p>
          <p>
            If, however, a matter involves a critical discussion of people featured in the news or who have a large public audience, we may allow it.
          </p>
          <p>This is a public platform. Be nice!</p>

          <h3 className="text-xl font-semibold mt-6">d. Intellectual Property</h3>
          <p>
            Paintings, posters, photographs, advertisements, poems, limericks, sound recordings, musical compositions, lectures, articles, tele-series, movies, online videos, video games, computer software, plays, musicals, brands, affiliations, and other similar content, all are subject to intellectual property protection.
          </p>
          <p>
            Copying content whose intellectual property rights are held by another person or organization, and posting it as your own, is not allowed. If you want to reshare some content from within the Platform, do not remove attributions, watermarks, and original captions. Also, please take permission and give due credits to your fellow user who creates such content by mentioning their name.
          </p>
          <p>
            If you are creative, your work will be protected. If you want to use or share anyone’s work, take permission and give credits.
          </p>

          <h3 className="text-xl font-semibold mt-6">e. Violence</h3>
          <p>
            This includes all content that causes discomfort to our users due to the goriness in the content, such as graphical images or videos that glorify violence, or intends to incite violence, or encourages dangerous and illegal activities, or praises groups or leaders involved in terrorism, organized violence or criminal activities.
          </p>
          <p>
            Educative or informative content on violence may be allowed provided that it is captioned in detail and contains warnings for violent content.
          </p>
          <p>Post violent content only if your intent is to provide information, education, or spread awareness. Warn your audience!</p>

          <h3 className="text-xl font-semibold mt-6">f. Hate Speech and Propaganda</h3>
          <p>
            Content that intimidates any person or promotes violent behavior, targets or demeans any particular religion, caste, ethnicity, community, disability (physical or mental), age or gender, is prohibited. Any kind of content which produces hatred or has the intention of creating or spreading hatred or hate propaganda along the lines of religion, caste, ethnicity, community, age or gender is also not allowed.
          </p>
          <p>
            Refrain from incendiary commentary and publishing theories that may appall our users and influence them negatively.
          </p>
          <p>We encourage that you express your opinion, but think before you write. Remember that this is a social platform!</p>

          <h3 className="text-xl font-semibold mt-6">g. Abuse, Self-Injury or Suicide</h3>
          <p>
            Posting any content that relates to physical, sexual, or psychological maltreatment, neglect, or abuse of a person, be it that of a child or an adult, is prohibited. Posts showcasing self-harm, injury, or suicide or provoking anyone to commit self-harm are also not allowed. Further, posts that identify, tag, and negatively target victims or survivors of abuse, self-injury, or domestic or similar violence are also prohibited.
          </p>
          <p>Foster some care in the society and maintain our supportive environment.</p>

          <h3 className="text-xl font-semibold mt-6">h. Illegal Activities</h3>
          <p>
            We have zero tolerance for content or activities that advocate or promote illegal activities. Content related to organized crime, violence, or terrorist activities is not allowed. Sale of illegal goods or services, regulated goods, drugs, and soliciting or selling of sexual services is strictly forbidden.
          </p>
          <p>
            Do not post tutorials or instructions on content that educates the users on illegal activities (such as making bombs or doing drugs). Do not promote online gambling, online real money games of skill, or online lotteries. Do not use our Platform to solicit or facilitate any transaction or gift involving goods and services which are declared illegal by the Government of India
          </p>
          <p>
            Impersonating another person (such as your friends, celebrities, or brands) and distributing false or misleading information on our Platform to make personal or financial gains is fraud.
          </p>
          <p>DudePro does not let you conduct any activities that the law prohibits.</p>

          <h3 className="text-xl font-semibold mt-6">i. Non-Consensual (Personal) Content</h3>
          <p>
            You must not post anyone’s personal or intimate photographs or videos without their permission or consent. Such an act is an invasion of a person’s privacy.
          </p>
          <p>
            This also includes posting content that portrays a person in a bad light and negatively impacts their reputation. We do not allow content that may reveal private information about an individual, such as phone number, address, financial information, Aadhar Number, etc.
          </p>
          <p>Do not post content that invades the privacy of another person.</p>

          <h3 className="text-xl font-semibold mt-6">j. Misinformation</h3>
          <p>
            Do not spread misinformation (verifiably false information) that may cause harm to an individual or a community, such as misinformation about COVID-19. You must not post misleading or deceptive information that can lead to harm or confusion amongst our community members.
          </p>
          <p>We encourage that you post information that is true and authentic.</p>

          <h3 className="text-xl font-semibold mt-6">k. Spam</h3>
          <p>
            Posting repetitive content or sending the same message multiple times to a large number of people is considered “spamming”. This also includes posting links to external websites that are unsafe and posting content with misleading clickbait. Any act that artificially increases the number of views, likes, comments, or any other metrics using technical means is forbidden.
          </p>
          <p>Respect your fellow users and avoid spamming.</p>

          <h3 className="text-xl font-semibold mt-6">l. Impersonation</h3>
          <p>
            Do not impersonate any other individual, organization, government, or any official representative of any such individual or organization. This includes creating misleading usernames, names, profile bios, or profile pictures.
          </p>
          <p>Be yourself!</p>

          <h3 className="text-xl font-semibold mt-6">m. Security Breaches</h3>
          <p>
            Do not post content that attempts to interfere with, disrupt, harm, or access in an unauthorized manner the Platform, our users, or their data. We do not allow content that contains software viruses, malware, or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer resource.
          </p>
          <p>Do not misuse our Platform or post content that can compromise our security.</p>

          <h3 className="text-xl font-semibold mt-6">n. Use of Our Content</h3>
          <p>
            DudePro retains the ownership of and reserves the right to all materials on the Platform, including text, images, graphics, video, audio, and software. The DudePro logo, and other marks are trademarks of DudePro. You are not permitted to use any content posted by us without our prior written permission.
          </p>
          <p>Enjoy our content, but do not steal it!</p>

          <h3 className="text-xl font-semibold mt-6">Consequences</h3>
          <p>
            If your content violates these Guidelines, we may:
          </p>
          <ul className="list-disc list-inside ml-5">
            <li>Ask you to remove or edit your content;</li>
            <li>Remove your content;</li>
            <li>Restrict, suspend or terminate your account; or</li>
            <li>Report you to law enforcement authorities or take appropriate legal action against you.</li>
          </ul>
          <p>We expect you to respect these guidelines and help us create a safe and enjoyable community for everyone. Thank you for being a part of DudePro!</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CommunityGuidelines;
