import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';

const Policy = () => {
  return (
    <main className="container mx-auto p-4">
      <Header />
      <div className="bg-black-100 text-white p-2 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-16 mt-16 text-center text-yellow-500">Privacy Policy</h1>
        <div className="space-y-6">
          <p>
            We at DudePro recognize that your privacy is very important and take it seriously. This Privacy Policy (“Privacy Policy”) sets out how we collect, use and disclose your data when you use our website Home – DudePro (“Website”) and/or mobile application called DudePro (“App”). The Website and App are collectively referred to as the “Platform”. References to “we”, “our” or “us” or the “Company” shall mean the Platform. Any references to “you”, “your” or “user” shall mean any person or entity using our Platform. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p>
            This Privacy Policy is a part of and is to be read with the DudePro terms of use (“Terms”) <a href="https://www.dudepro.app/terms-of-service/" className="text-blue-400">https://www.dudepro.app/terms-of-service/</a>. By using this Platform, you agree to the terms and conditions of this Privacy Policy. You also consent to our use and disclosure of your Personal Information (as defined below) in the manner described in this Privacy Policy. The capitalized words used in this Privacy Policy but not defined herein shall have the meaning given to such words in the Terms. If you do not agree with the terms and conditions of this privacy policy, please do not use this platform.
          </p>

          {/* Collection and Use of Information */}
          <h2 className="text-2xl font-semibold mt-10">1. Collection and Use of Information</h2>

          {/* Personal Information */}
          <h3 className="text-xl font-semibold mt-8">1.1 Personal Information</h3>
          <p>We may collect the following personal information about you:</p>
          <ul className="list-disc list-inside ml-5">
            <li><strong>Your Profile Information:</strong> When you register on the Platform, you give us information including your username, date of birth (where applicable), email address and/or telephone number, the information you disclose in your user profile.</li>
            <li><strong>Information from Third Parties:</strong> You may choose to share certain data with us from third parties or through your use of the Platform, we may collect such third-party data automatically. We have set out further detail on the information we receive from third parties below:</li>
            <ul className="list-disc list-inside ml-10">
              <li><strong>Business Partners:</strong> If you choose to register to use the Platform using your social network account details (e.g., Facebook, Google), you will provide us or allow your social network to provide us with your username and public profile. We will likewise share certain information with your social networks such as your app ID, access token, and the referring URL.</li>
            </ul>
          </ul>

          {/* Non-personal Information */}
          <h3 className="text-xl font-semibold mt-8">1.2 Non-personal Information</h3>
          <p>We may collect the following non-personal information:</p>
          <ul className="list-disc list-inside ml-5">
            <li><strong>User Content and Behavioural Information:</strong> We process the content you generate on the Platform, including preferences you set (such as choice of language), photographs and videos you upload and comments you make, and information regarding your use of the Platform.</li>
            <li><strong>Technical Information we collect about you:</strong> We automatically collect certain information from you when you use the Platform including when you are using the App without an account. Such information includes your IP address, browsing history (i.e. the content you have viewed on the Platform), model of your device, the device system, network type, and operating system.</li>
          </ul>

          {/* Examples of how we may use your information */}
          <h2 className="text-2xl font-semibold mt-10">1.3 Examples of how we may use your information</h2>
          <ul className="list-disc list-inside ml-5">
            <li>To better understand customer behavior, customer interest, and other trends among our users and improve our products, services, and advertising.</li>
            <li>Provide you with user support;</li>
            <li>Personalize the content you receive and provide you with tailored content that will be of interest to you;</li>
            <li>Enable you to share User Content and interact with other users;</li>
            <li>To help us detect and combat abuse, harmful activity, fraud, spam, and illegal activity on the Platform;</li>
            <li>Ensure your safety and security including reviewing user content.</li>
            <li>Ensure content is presented in the most effective manner for you and your device;</li>
            <li>Improve, promote and develop the Platform and promote popular topics, hashtags, and campaigns on the Platform;</li>
            <li>Carry out data analysis and test the Platform to ensure its stability and security;</li>
            <li>Allow you to participate in interactive features of the Platform;</li>
            <li>To ensure that you are old enough to use our Platform (as required by law);</li>
            <li>Provide you with location-based services (where those services are available in your jurisdiction);</li>
            <li>Enforce our terms, conditions, and policies;</li>
            <li>Administer the Platform including troubleshooting.</li>
          </ul>

          {/* Information Sharing and Disclosure */}
          <h2 className="text-2xl font-semibold mt-10">2. Information Sharing and Disclosure</h2>
          <h3 className="text-xl font-semibold mt-8">2.1 Third parties we may share your data with:</h3>
          <ul className="list-disc list-inside ml-5">
            <li><strong>Business Partners:</strong> If you choose to register to use the Platform using your social network account details (e.g., Facebook, Twitter, Instagram, Google), you will provide us or allow your social network to provide us with your username and public profile. We will likewise share certain information with the relevant social network such as your app ID, access token and the referring URL. Where you opt to share content on social media platforms, the video, username, and accompanying text will be shared on that platform or, in the case of sharing via instant messaging platforms such as Whatsapp, a link to the content will be shared.</li>
            <li><strong>Analytics providers:</strong> We use analytics providers to help us in the optimization and improvement of the Platform.</li>
            <li><strong>Law Enforcement:</strong> We will share your information with law enforcement agencies, public authorities, or other organizations if legally required to do so, or if such use is reasonably necessary.</li>
            <li><strong>Public Profiles:</strong> Please note that if your profile is public, your content will be visible to anyone on the Platform and may also be accessed or shared by your friends and followers as well as third parties such as search engines, content aggregators, and news sites.</li>
            <li>In the event that we sell or buy any business or assets (whether a result of liquidation, bankruptcy, or otherwise), in which case we will disclose your data to the prospective seller or buyer of such business or assets; or if we sell, buy, merge, are acquired by, or partner with other companies or businesses, or sell some or all of our assets. In such transactions, user information may be among the transferred assets.</li>
          </ul>

          {/* Third Party */}
          <h2 className="text-2xl font-semibold mt-10">3. Third Party</h2>
          <p>
            DudePro may contain links to third-party websites, products, and services. When you click on links of third parties in an Application, the Services, or the Site, you may leave the Application, the Services, or the Site. Data collected by third parties is governed by their privacy practices. We encourage you to learn about the privacy practices of those third parties. We do not collect your information on and through and This Policy does not address, and we are not responsible for, the privacy practices of Web sites operated by third parties, whether they are linked to or otherwise accessible from an Application, the Services, or the Site. The inclusion of a link or accessibility of third-party Websites does not imply endorsement of such a third party.
          </p>

          {/* Users with Whom You Share Your Information */}
          <h2 className="text-2xl font-semibold mt-10">4. Users with Whom You Share Your Information</h2>
          <p>
            We cannot control the actions of other users with whom you share your information. We cannot, and do not, control the information you share with other users using DudePro or how such other Users will use or share such information. We are not responsible for third-party circumvention of our security measures.
          </p>

          {/* Protection of Data */}
          <h2 className="text-2xl font-semibold mt-10">5. Protection of Data</h2>
          <p>
            We take reasonable administrative, physical, and electronic measures designed to safeguard and protect your information from unauthorized access or disclosure. This includes using Secure Socket Layer (SSL) and/or Transport Layer Security (TLS) technology to encrypt data during transmission. However, no security or encryption method can be guaranteed to protect information from hackers or human error.
          </p>

          {/* Storage of Data */}
          <h2 className="text-2xl font-semibold mt-10">6. Storage of Data</h2>
          <p>
            We retain information as long as it is necessary and relevant for the operations of DudePro. If you delete your account, your information and your profile, including your photos, videos, comments, and all other data will be removed from the DudePro Platform, but your data may persist in backup copies for a reasonable period of time and as necessary to comply with our legal obligations (including law enforcement requests), resolve disputes, enforce our agreements, support business operations, and continue to develop and improve our services. Where we no longer need your personal data, we will dispose of it in a secure manner (without further notice to you).
          </p>

          {/* Changes */}
          <h2 className="text-2xl font-semibold mt-10">7. Changes</h2>
          <p>
            Please note that we may change this Privacy Policy from time to time at our sole discretion. If we make any changes, we will change the Last Updated date above. If there are material changes to this Privacy Policy, we will notify you either by prominently posting a notice of such changes or by directly sending you a notification.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-semibold mt-10">8. Contact</h2>
          <p>
            Please contact us at <a href="mailto:support@dudepro.app" className="text-blue-400">support@dudepro.app</a> if you have any questions about our Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Policy;
