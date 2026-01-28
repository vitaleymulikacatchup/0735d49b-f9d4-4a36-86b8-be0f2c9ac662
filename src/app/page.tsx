"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { BookOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="aurora"
      cardStyle="solid"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Books", id: "books" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="4itaka"
          bottomLeftText="Book Club Community"
          bottomRightText="hello@4itaka.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="4itaka"
          description="Join our vibrant community of passionate readers discovering stories that connect us. Explore curated selections, share insights, and celebrate the power of literature together."
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://img.b2bpic.net/free-photo/still-life-with-cup-tea-books-burning-candle-beautiful-candlestick-home-comfort-concept_169016-9931.jpg"
          imageAlt="Book club community reading together"
          frameStyle="card"
          logoLineHeight={1.1}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About 4itaka"
          description={[
            "4itaka is a welcoming book club dedicated to creating meaningful connections through literature. We believe that books have the power to transform perspectives, spark conversations, and bring people together from all walks of life.",            "Our mission is to cultivate a space where readers of all levels can explore diverse genres, discover hidden literary gems, and engage in thoughtful discussions that deepen their appreciation for storytelling and human connection."
          ]}
          useInvertedBackground="invertDefault"
          showBorder={true}
          buttons={[
            { text: "Join Our Community", href: "#contact" }
          ]}
        />
      </div>

      <div id="books" data-section="books">
        <ProductCardOne
          title="Featured Books"
          description="Explore our current reading selections and discover your next favorite story"
          tag="This Month"
          products={[
            {
              id: "1",              name: "The Midnight Library",              price: "£14.99",              imageSrc: "https://img.b2bpic.net/free-photo/antique-book-titles-from-our-own-original-public-domain-library-collection_53876-160406.jpg",              imageAlt: "The Midnight Library book cover"
            },
            {
              id: "2",              name: "Lessons in Chemistry",              price: "£16.50",              imageSrc: "https://img.b2bpic.net/free-photo/wooden-table-with-three-books-top-each-other-daytime_181624-10034.jpg",              imageAlt: "Lessons in Chemistry book cover"
            },
            {
              id: "3",              name: "The Seven Husbands of Evelyn Hugo",              price: "£15.99",              imageSrc: "https://img.b2bpic.net/free-photo/cozy-home-composition-with-books-table-closeup_169016-25849.jpg",              imageAlt: "The Seven Husbands of Evelyn Hugo book cover"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <MetricCardSeven
          title="Why Join 4itaka"
          description="Experience the benefits of being part of our thriving literary community"
          metrics={[
            {
              id: "1",              value: "500+",              title: "Active Book Club Members",              items: [
                "Members from 25+ countries",                "Diverse reading preferences",                "Supportive and inclusive community"
              ]
            },
            {
              id: "2",              value: "48+",              title: "Books Read Annually",              items: [
                "Mix of classics and contemporary",                "Various genres explored",                "Author-led discussions"
              ]
            },
            {
              id: "3",              value: "100%",              title: "Member Satisfaction",              items: [
                "Meaningful connections formed",                "Personal growth through reading",                "Lasting friendships created"
              ]
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Members Say"
          description="Hear from passionate readers who found their community at 4itaka"
          tag="Member Stories"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell, London",              date: "Date: November 2024",              title: "A Life-Changing Literary Family",              quote: "Joining 4itaka transformed my relationship with reading. The discussions are thoughtful, the members are genuine, and I've discovered books I never would have picked up alone. This is more than a book club—it's a family.",              tag: "Avid Reader",              avatarSrc: "https://img.b2bpic.net/free-photo/smiling-young-professional-businesswoman-looking-upper-left-corner-with-hopeful-face-expression-standing-white_176420-41313.jpg",              imageSrc: "https://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104590.jpg"
            },
            {
              id: "2",              name: "James Chen, Singapore",              date: "Date: October 2024",              title: "Connected Across Continents",              quote: "I was hesitant to join an online book club, but 4itaka's community is so vibrant and welcoming. I've made friends from all over the world and we share a genuine passion for literature. The monthly selections always challenge and inspire me.",              tag: "Monthly Member",              avatarSrc: "https://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageSrc: "https://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104590.jpg"
            },
            {
              id: "3",              name: "Emma Williams, Dublin",              date: "Date: September 2024",              title: "Rediscovering My Love for Books",              quote: "After years of not reading regularly, 4itaka reignited my passion. The thoughtful book selections and the diverse perspectives of our members have made reading an exciting adventure again. Highly recommend!",              tag: "Returning Reader",              avatarSrc: "https://img.b2bpic.net/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg",              imageSrc: "https://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104590.jpg"
            },
            {
              id: "4",              name: "David Patel, Melbourne",              date: "Date: August 2024",              title: "Community Beyond Books",              quote: "What I love most about 4itaka is the sense of belonging. We discuss books, yes, but we also support each other through life's ups and downs. It's a community that truly cares.",              tag: "Long-time Member",              avatarSrc: "https://img.b2bpic.net/free-photo/hopeful-young-manager-businesswoman-cross-arms-chest-smiling-looking-confident-like-real-professional-white-background_176420-47052.jpg",              imageSrc: "https://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104590.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about joining 4itaka and our reading community"
          faqs={[
            {
              id: "1",              title: "How often do we meet and discuss books?",              content: "We have monthly virtual discussions where members gather to share their thoughts on the featured book. Discussions typically last 90 minutes and are recorded for those who cannot attend live. We also have an active online forum for asynchronous discussions throughout the month."
            },
            {
              id: "2",              title: "Do I need to finish the entire book before discussions?",              content: "While we encourage members to read the full book, we understand that life gets busy. You're welcome to participate at whatever level feels comfortable for you. Our discussions focus on themes and ideas, so even partial reading is valuable."
            },
            {
              id: "3",              title: "What if I don't like the book selection?",              content: "Member input is crucial! We regularly rotate who selects books and encourage all members to suggest titles. If a selection isn't your cup of tea, you can still participate in discussions or take a month off. No pressure—we celebrate diverse reading tastes."
            },
            {
              id: "4",              title: "Is there a membership fee?",              content: "We offer a free tier with access to monthly discussions and our community forum. Premium membership (£5/month) includes exclusive author interviews, early book selections, and special content. Either way, you're part of our community."
            },
            {
              id: "5",              title: "Can I invite friends to join?",              content: "Absolutely! We love welcoming new members. We offer referral incentives and often have open community events where friends can experience 4itaka before committing. Simply share your referral link or have them visit our website."
            }
          ]}
          textPosition="left"
          useInvertedBackground="invertDefault"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Start Your Reading Journey?"
          ctaDescription="Join 4itaka today and become part of a vibrant community of book lovers. Let's discover stories together."
          ctaButton={{ text: "Join Now", href: "mailto:hello@4itaka.com" }}
          ctaIcon={BookOpen}
          faqs={[
            {
              id: "1",              title: "What happens after I join?",              content: "After signing up, you'll receive a welcome email with community guidelines, our reading schedule, and details about this month's book discussion. We'll invite you to our Discord server and welcome you warmly!"
            },
            {
              id: "2",              title: "When is the next book discussion?",              content: "Our next monthly discussion is scheduled for the first Thursday of each month at 7 PM GMT. Check our website for the current month's featured book and discussion details."
            },
            {
              id: "3",              title: "Can I participate if I'm in a different time zone?",              content: "Yes! We record all discussions and provide transcripts. Our asynchronous forum allows you to participate whenever convenient for you. We're a truly global community."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Community",              items: [
                { label: "Join Us", href: "#contact" },
                { label: "Events", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Book Recommendations", href: "#" },
                { label: "Discussion Guides", href: "#" },
                { label: "Member Stories", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Email", href: "mailto:hello@4itaka.com" },
                { label: "Discord", href: "#" },
                { label: "Instagram", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 4itaka Book Club. All rights reserved."
          bottomRightText="Made for book lovers, by book lovers"
        />
      </div>
    </ThemeProvider>
  );
}