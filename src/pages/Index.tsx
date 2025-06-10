import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sports-blue/5 to-sports-orange/5">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-sports-blue">
          سامانه مدیریت ورزشی
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline">ورود</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-sports-blue hover:bg-sports-blue-dark">ثبت نام</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-sports-blue mb-4">
          به سامانه مدیریت ورزشی خوش آمدید
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          بهترین ابزار برای مدیریت تیم‌ها، بازیکنان و برنامه‌های ورزشی
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link to="/register">
            <Button size="lg" className="bg-sports-blue hover:bg-sports-blue-dark text-lg px-8 py-3">
              شروع رایگان
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              مشاهده دمو
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-sports-blue mb-8">
          ویژگی‌ها
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-sports-blue mb-2">
              مدیریت تیم
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              به راحتی تیم‌های ورزشی خود را مدیریت کنید
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-sports-blue mb-2">
              برنامه‌ریزی مسابقات
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              برنامه‌ریزی و مدیریت مسابقات و تمرینات
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-sports-blue mb-2">
              آمار و گزارش‌ها
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              دریافت آمار دقیق و گزارش‌های کامل
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-sports-blue mb-8">
          پلن‌های قیمت‌گذاری
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-sports-blue mb-2">
              رایگان
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              مناسب برای شروع
            </p>
            <p className="text-2xl font-bold text-sports-blue mb-4">
              رایگان
            </p>
            <Button className="bg-sports-blue hover:bg-sports-blue-dark">
              شروع کنید
            </Button>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-sports-blue mb-2">
              استاندارد
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              امکانات بیشتر برای تیم‌های حرفه‌ای
            </p>
            <p className="text-2xl font-bold text-sports-blue mb-4">
              99,000 تومان / ماه
            </p>
            <Button className="bg-sports-blue hover:bg-sports-blue-dark">
              خرید اشتراک
            </Button>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-sports-blue mb-2">
              ویژه
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              بهترین امکانات برای حرفه‌ای‌ها
            </p>
            <p className="text-2xl font-bold text-sports-blue mb-4">
              199,000 تومان / ماه
            </p>
            <Button className="bg-sports-blue hover:bg-sports-blue-dark">
              خرید اشتراک
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-700 dark:text-gray-300">
        تمامی حقوق محفوظ است © 1403
      </footer>
    </div>
  );
};

export default Index;
