import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Trophy, 
  BarChart3, 
  Calendar, 
  Target, 
  Zap,
  Star,
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-vazir">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link 
              to="/register" 
              className="bg-sports-orange text-white px-6 py-2 rounded-lg hover:bg-sports-orange/90 transition-colors font-medium"
            >
              ثبت نام
            </Link>
            <Link 
              to="/login" 
              className="border border-sports-blue text-sports-blue px-6 py-2 rounded-lg hover:bg-sports-blue hover:text-white transition-colors font-medium"
            >
              ورود
            </Link>
          </div>
          <div className="text-2xl font-bold sports-gradient bg-clip-text text-transparent">
            سیستم مدیریت ورزشی
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 sports-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm font-medium" variant="secondary">
              سیستم مدیریت ورزشی نسل جدید
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              مدیریت باشگاه ورزشی
              <span className="text-primary block">هوشمند و آسان</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
              تمام ابزارهای مورد نیاز برای مدیریت بازیکنان، تیم‌ها، مالی و گزارش‌گیری در یک پلتفرم یکپارچه
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
              <Button size="lg" className="text-lg px-8 py-6">
                شروع دموی رایگان
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                مشاهده ویدیو معرفی
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">ویژگی‌های پیشرفته</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              همه چیز که برای مدیریت حرفه‌ای باشگاه ورزشی نیاز دارید
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>مدیریت بازیکنان</CardTitle>
                <CardDescription>
                  پروفایل کامل بازیکنان، تاریخچه عملکرد، مصدومیت‌ها و اطلاعات شخصی
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-sports-green mb-4" />
                <CardTitle>آنالیز و گزارش‌گیری</CardTitle>
                <CardDescription>
                  داشبورد تحلیلی پیشرفته با نمودارهای تعاملی و گزارش‌های تفصیلی
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Calendar className="h-12 w-12 text-sports-orange mb-4" />
                <CardTitle>برنامه‌ریزی تمرینات</CardTitle>
                <CardDescription>
                  تقویم هوشمند برای تمرینات، مسابقات و رویدادهای باشگاه
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-sports-red mb-4" />
                <CardTitle>تعیین اهداف</CardTitle>
                <CardDescription>
                  تعریف و پیگیری اهداف فردی و تیمی با سیستم امتیازدهی
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Trophy className="h-12 w-12 text-sports-blue mb-4" />
                <CardTitle>مدیریت مسابقات</CardTitle>
                <CardDescription>
                  ثبت نتایج، جدول امتیازات و آمار کامل مسابقات و تورنمنت‌ها
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>اتوماسیون</CardTitle>
                <CardDescription>
                  خودکارسازی فرآیندها، یادآوری‌ها و ارسال پیامک/ایمیل
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">۱۲۰۰+</div>
              <p className="text-muted-foreground">باشگاه فعال</p>
            </div>
            <div className="animate-fade-in-up [animation-delay:0.1s]">
              <div className="text-4xl font-bold text-sports-green mb-2">۵۰,۰۰۰+</div>
              <p className="text-muted-foreground">بازیکن ثبت شده</p>
            </div>
            <div className="animate-fade-in-up [animation-delay:0.2s]">
              <div className="text-4xl font-bold text-sports-orange mb-2">۹۸%</div>
              <p className="text-muted-foreground">رضایت کاربران</p>
            </div>
            <div className="animate-fade-in-up [animation-delay:0.3s]">
              <div className="text-4xl font-bold text-sports-red mb-2">۲۴/۷</div>
              <p className="text-muted-foreground">پشتیبانی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">نظرات کاربران</h2>
            <p className="text-xl text-muted-foreground">آنچه باشگاه‌ها درباره ما می‌گویند</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "این سیستم مدیریت باشگاه ما را کاملاً متحول کرده. حالا می‌توانیم تمام کارها را در یک مکان انجام دهیم."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">احمد محمدی</p>
                    <p className="text-sm text-muted-foreground">مدیر باشگاه پرسپولیس جوانان</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "گزارش‌گیری و آنالیز عملکرد بازیکنان بسیار دقیق و مفصل است. به ما کمک زیادی کرده."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sports-green/10 rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-sports-green" />
                  </div>
                  <div>
                    <p className="font-semibold">سارا احمدی</p>
                    <p className="text-sm text-muted-foreground">مربی تیم ملی والیبال بانوان</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "رابط کاربری فارسی عالی و پشتیبانی تیم فنی بی‌نظیر است. پیشنهاد می‌کنم."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sports-orange/10 rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 text-sports-orange" />
                  </div>
                  <div>
                    <p className="font-semibold">رضا کریمی</p>
                    <p className="text-sm text-muted-foreground">مدیر آکادمی فوتبال امید</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">پلان‌های قیمت‌گذاری</h2>
            <p className="text-xl text-muted-foreground">پلان مناسب خود را انتخاب کنید</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">پایه</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">۵۰۰,۰۰۰ تومان</div>
                <p className="text-muted-foreground">در ماه</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>تا ۱۰۰ بازیکن</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>گزارش‌گیری پایه</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>پشتیبانی ایمیلی</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">انتخاب پلان</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary shadow-lg scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">محبوب‌ترین</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">حرفه‌ای</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">۱,۵۰۰,۰۰۰ تومان</div>
                <p className="text-muted-foreground">در ماه</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>تا ۵۰۰ بازیکن</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>گزارش‌گیری پیشرفته</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>پشتیبانی ۲۴/۷</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>اپلیکیشن موبایل</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">انتخاب پلان</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">سازمانی</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">تماس بگیرید</div>
                <p className="text-muted-foreground">قیمت ویژه</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>بازیکن نامحدود</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>امکانات اختصاصی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sports-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sports-green"></div>
                    </div>
                    <span>مدیر اختصاصی</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">تماس با فروش</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sports-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            آماده شروع هستید؟
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            همین امروز باشگاه خود را به سطح بعدی ببرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              شروع دموی ۳۰ روزه
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              مشاوره رایگان
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">تماس با ما</h2>
            <p className="text-xl text-muted-foreground">سوال دارید؟ ما پاسخگو هستیم</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">تلفن</h3>
              <p className="text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sports-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-sports-green" />
              </div>
              <h3 className="font-semibold mb-2">ایمیل</h3>
              <p className="text-muted-foreground">info@sportsmanager.ir</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sports-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-sports-orange" />
              </div>
              <h3 className="font-semibold mb-2">آدرس</h3>
              <p className="text-muted-foreground">تهران، میدان آزادی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">ورزش‌منیجر</span>
              </div>
              <p className="text-muted-foreground">
                سیستم مدیریت ورزشی پیشرفته برای باشگاه‌ها و سازمان‌های ورزشی
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">محصول</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">ویژگی‌ها</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">قیمت‌ها</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">دموی رایگان</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">پشتیبانی</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">راهنما</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">آموزش</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">تماس با ما</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">شرکت</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">درباره ما</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">وبلاگ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">شرایط استفاده</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© ۱۴۰۳ ورزش‌منیجر. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
