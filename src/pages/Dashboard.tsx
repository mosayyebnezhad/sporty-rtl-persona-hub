
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LogOut, Users, Calendar, Trophy, Settings, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [coachName, setCoachName] = useState('احمد رضایی');
  const [teamName, setTeamName] = useState('تیم فوتبال جوانان');
  const [experience, setExperience] = useState('8 سال');

  const players = [
    { id: 1, name: 'علی محمدی', position: 'مهاجم', age: 22, status: 'active' },
    { id: 2, name: 'حسن احمدی', position: 'مدافع', age: 24, status: 'injured' },
    { id: 3, name: 'رضا کریمی', position: 'دروازه‌بان', age: 26, status: 'active' },
    { id: 4, name: 'محمد صادقی', position: 'هافبک', age: 23, status: 'active' },
  ];

  const upcomingMatches = [
    { id: 1, opponent: 'تیم پرسپولیس', date: '1403/03/15', time: '18:00', venue: 'ورزشگاه آزادی' },
    { id: 2, opponent: 'تیم استقلال', date: '1403/03/22', time: '20:30', venue: 'ورزشگاه انقلاب' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground">پنل مربی</h1>
            <Badge variant="secondary" className="bg-sports-blue/10 text-sports-blue">
              {teamName}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Link to="/">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 ml-2" />
                خروج
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Profile */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" alt={coachName} />
                  <AvatarFallback className="text-2xl bg-sports-blue text-white">
                    {coachName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{coachName}</CardTitle>
                <CardDescription>مربی ارشد</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="coachName">نام مربی</Label>
                  <Input
                    id="coachName"
                    value={coachName}
                    onChange={(e) => setCoachName(e.target.value)}
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamName">نام تیم</Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">سابقه</Label>
                  <Input
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="text-right"
                  />
                </div>
                <Button className="w-full bg-sports-blue hover:bg-sports-blue-dark">
                  <Settings className="h-4 w-4 ml-2" />
                  ویرایش پروفایل
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">کلی</TabsTrigger>
                <TabsTrigger value="players">بازیکنان</TabsTrigger>
                <TabsTrigger value="matches">مسابقات</TabsTrigger>
                <TabsTrigger value="statistics">آمار</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">کل بازیکنان</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-sports-blue">{players.length}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">مسابقات پیش رو</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-sports-orange">{upcomingMatches.length}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">جوایز</CardTitle>
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-sports-green">12</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>مسابقات پیش رو</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingMatches.map((match) => (
                        <div key={match.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{match.opponent}</h3>
                            <p className="text-sm text-muted-foreground">{match.venue}</p>
                          </div>
                          <div className="text-left">
                            <p className="font-medium">{match.date}</p>
                            <p className="text-sm text-muted-foreground">{match.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="players" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>لیست بازیکنان</CardTitle>
                    <CardDescription>مدیریت بازیکنان تیم</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {players.map((player) => (
                        <div key={player.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarFallback>{player.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{player.name}</h3>
                              <p className="text-sm text-muted-foreground">{player.position} - {player.age} سال</p>
                            </div>
                          </div>
                          <Badge variant={player.status === 'active' ? 'default' : 'destructive'}>
                            {player.status === 'active' ? 'فعال' : 'مصدوم'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="matches" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>برنامه مسابقات</CardTitle>
                    <CardDescription>مدیریت مسابقات و تمرین‌ها</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingMatches.map((match) => (
                        <div key={match.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{match.opponent}</h3>
                            <Badge className="bg-sports-orange/10 text-sports-orange">مسابقه</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">تاریخ: </span>
                              <span>{match.date}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">ساعت: </span>
                              <span>{match.time}</span>
                            </div>
                            <div className="col-span-2">
                              <span className="text-muted-foreground">مکان: </span>
                              <span>{match.venue}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="statistics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>آمار عملکرد</CardTitle>
                    <CardDescription>آمار کلی تیم و بازیکنان</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-sports-green">85%</div>
                        <div className="text-sm text-muted-foreground">نرخ برد</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-sports-blue">42</div>
                        <div className="text-sm text-muted-foreground">گل زده</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-sports-orange">18</div>
                        <div className="text-sm text-muted-foreground">گل خورده</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-sports-green">24</div>
                        <div className="text-sm text-muted-foreground">مسابقات</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
