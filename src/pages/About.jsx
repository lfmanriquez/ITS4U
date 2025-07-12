export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-inherit p-6 animate-in fade-in duration-1000">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-black dark:text-white text-4xl font-bold mb-2">
            About ITS4U
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            (Information Technology Services for You)
          </p>
        </div>

        {/* Image placeholder */}
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          {/* Replace with <img src="..." alt="ITS4U team" /> */}
          Image Placeholder (e.g. Luis or team)
        </div>

        <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
          Hi, I’m <strong>Luis</strong> — I’m married, a proud dad, and a
          lifelong lover of all things tech. I started this service because I
          know firsthand how <em>intimidating technology can feel</em>. Whether
          it’s a slow computer, confusing settings, or just trying to get your
          Wi-Fi to work, it’s easy to feel overwhelmed — and unfortunately, many
          people in tech don’t make it any easier.
        </p>

        <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
          At <strong>ITS4U</strong>, we believe{" "}
          <em>no question is too small and no problem is too simple</em>. Our
          mission is to offer friendly, patient, and personalized tech help —
          without the judgment. We want to create a space where you feel
          comfortable asking anything, because we genuinely love helping.
        </p>

        {/* Image placeholder */}
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          {/* Replace with <img src="..." alt="ITS4U service van" /> */}
          Image Placeholder (e.g. mobile service van or home visit)
        </div>

        <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
          Our service is <strong>mobile</strong>, which means we come to you —
          right to your home — so you can get help where you’re most
          comfortable. For now, we’re focused on supporting our neighbors in the{" "}
          <strong>Vistancia community</strong>, but we’re growing fast.
        </p>

        <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
          We offer a wide range of{" "}
          <strong>information technology solutions</strong>: device setup,
          troubleshooting, Wi-Fi and network support, software help, and more.
          Whether you're a parent trying to get your child’s tablet set up, a
          retiree learning to use your phone, or just someone who wants things
          to work — we’re here for you.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 text-lg">
          “Our goal is simple: to help people feel less anxious and more
          confident with technology.”
        </blockquote>

        <div className="text-right text-gray-700 dark:text-gray-300 text-lg font-medium mt-4">
          — Luis
          <br />
          Founder, ITS4U
        </div>
      </div>
    </div>
  );
}
