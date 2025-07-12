import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellIcon, LaptopIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
const appName = import.meta.env.VITE_APP_NAME;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-inherit p-6 animate-in fade-in duration-1000">
      <section className="text-center mb-10 ">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 dark:text-white">
          Welcome to {appName}
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto dark:text-white">
          Servicing the Vistancia Area, simplifying IT support. Create an
          account, schedule work, and stay informed—all in one place.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button
            variant="default"
            className="dark:hover:bg-primary/50 dark:hover:text-black"
          >
            Get Started
          </Button>
          <Link to="/about">
            <Button
              variant="outline"
              className="dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-white border-2 border-primary text-primary shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-">
              <LaptopIcon className="h-6 w-6" /> Scheduled Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm opacity-80">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-red-500 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <UserIcon className="h-6 w-6" /> New Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm opacity-80">Signed up this week</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-500 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <BellIcon className="h-6 w-6" /> Pending Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm opacity-80">Awaiting approval</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
