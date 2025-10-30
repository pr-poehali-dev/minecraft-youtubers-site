import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showAllStreams, setShowAllStreams] = useState(false);
  const videosScrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const members = [
    {
      name: "StreamerPro",
      subscribers: "250K",
      avatar: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/130058c2-9642-4173-b449-f3bd5134420c.jpg",
      specialty: "Выживание",
      youtube: "https://youtube.com"
    },
    {
      name: "BuildMaster",
      subscribers: "180K",
      avatar: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/187ca6a1-4ee8-486b-8786-d2e512c65fe0.jpg",
      specialty: "Строительство",
      youtube: "https://youtube.com"
    },
    {
      name: "PvPKing",
      subscribers: "320K",
      avatar: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/130058c2-9642-4173-b449-f3bd5134420c.jpg",
      specialty: "PvP",
      youtube: "https://youtube.com"
    },
    {
      name: "RedstoneGuru",
      subscribers: "420K",
      avatar: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/187ca6a1-4ee8-486b-8786-d2e512c65fe0.jpg",
      specialty: "Редстоун",
      youtube: "https://youtube.com"
    }
  ];

  const videos = [
    {
      title: "Эпичный рейд на Край",
      creator: "StreamerPro",
      views: "45K",
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Строим мегабазу",
      creator: "BuildMaster",
      views: "32K",
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Турнир по PvP",
      creator: "PvPKing",
      views: "58K",
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Исследуем океанский монумент",
      creator: "StreamerPro",
      views: "28K",
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Создаём город будущего",
      creator: "BuildMaster",
      views: "41K",
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Битва за сокровища",
      creator: "PvPKing",
      views: "62K",
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    }
  ];

  const scrollVideos = (direction: 'left' | 'right') => {
    if (videosScrollRef.current) {
      const scrollAmount = 400;
      videosScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const allStreams = [
    {
      title: "Стрим: Покоряем Незер",
      creator: "StreamerPro",
      viewers: "2.3K",
      isLive: true,
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Стрим: Мини-игры с подписчиками",
      creator: "PvPKing",
      viewers: "1.8K",
      isLive: true,
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Стрим: Автоматические фермы",
      creator: "RedstoneGuru",
      viewers: "3.1K",
      isLive: false,
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Стрим: Хардкор выживание",
      creator: "StreamerPro",
      viewers: "4.2K",
      isLive: false,
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Стрим: Постройка замка",
      creator: "BuildMaster",
      viewers: "2.7K",
      isLive: false,
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    },
    {
      title: "Стрим: Скайблок челлендж",
      creator: "PvPKing",
      viewers: "5.1K",
      isLive: true,
      thumbnail: "https://cdn.poehali.dev/projects/05ab7f02-7c2a-472e-9cec-780dc9fd331d/files/d27350ce-89ec-4b89-a54e-8fba3b916f59.jpg"
    }
  ];

  const streams = showAllStreams ? allStreams : allStreams.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">⛏️</span>
            </div>
            <span className="text-2xl font-bold">MCStreamer</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("home")}
              className={`transition-colors ${activeSection === "home" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection("members")}
              className={`transition-colors ${activeSection === "members" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Участники
            </button>
            <button 
              onClick={() => scrollToSection("join")}
              className={`transition-colors ${activeSection === "join" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Как попасть
            </button>
            <button 
              onClick={() => scrollToSection("videos")}
              className={`transition-colors ${activeSection === "videos" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Видео
            </button>
            <button 
              onClick={() => scrollToSection("streams")}
              className={`transition-colors ${activeSection === "streams" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Стримы
            </button>
          </div>

          <Button 
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
            onClick={() => window.open("https://discord.gg", "_blank")}
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Discord
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Премиум сервер для создателей контента
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Сервер для
              <span className="text-primary"> Майнкрафт </span>
              ютуберов
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Закрытое сообщество топовых стримеров и создателей контента. 
              Уникальные постройки, эпичные ивенты и незабываемые приключения.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection("join")}
              >
                <Icon name="Zap" className="mr-2" size={20} />
                Как попасть
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => scrollToSection("videos")}
              >
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>

            <div className="flex justify-center pt-12">
              <Card className="bg-card/50 border-border w-64">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Участников</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="members" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="text-primary">участники</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Топовые майнкрафт-стримеры России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur"
              >
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary">
                      {member.specialty}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Icon name="Users" size={16} />
                    <span>{member.subscribers} подписчиков</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    onClick={() => window.open(member.youtube, "_blank")}
                  >
                    <Icon name="Youtube" className="mr-2" size={18} />
                    YouTube канал
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как <span className="text-primary">попасть</span> на сервер
            </h2>
            <p className="text-muted-foreground text-lg">
              Следуй инструкции для подключения
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Вступи в Discord</h3>
                    <p className="text-muted-foreground mb-4">Присоединись к нашему Discord серверу</p>
                    <Button 
                      className="bg-[#5865F2] hover:bg-[#4752C4]"
                      onClick={() => window.open("https://discord.gg", "_blank")}
                    >
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      Присоединиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Подай заявку</h3>
                    <p className="text-muted-foreground">Для попадания на сервер вы должны подать видео заявку. Подробнее вы можете узнать в нашем ДС в канале #проходка</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Получи доступ</h3>
                    <p className="text-muted-foreground">
                      После проверки анкеты получишь IP-адрес сервера и whitelist.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 backdrop-blur border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Info" className="text-primary" size={24} />
                  <h3 className="text-xl font-bold">Требования</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"></li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Регулярный выпуск контента по Minecraft
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Адекватность и соблюдение правил сообщества
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Видео</span> участников
            </h2>
            <p className="text-muted-foreground text-lg">
              Лучшие ролики и подборки
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur"
              onClick={() => scrollVideos('left')}
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>
            
            <div 
              ref={videosScrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videos.map((video, index) => (
                <Card 
                  key={index}
                  className="group hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur overflow-hidden flex-shrink-0 w-[350px]"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Play" size={28} />
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.creator}</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={14} />
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur"
              onClick={() => scrollVideos('right')}
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <section id="streams" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Стримы</span> участников
            </h2>
            <p className="text-muted-foreground text-lg">
              Следи за трансляциями в реальном времени
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {streams.map((stream, index) => (
              <Card 
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {stream.isLive && (
                    <Badge className="absolute top-2 left-2 bg-red-600 animate-pulse">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        LIVE
                      </span>
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={28} />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {stream.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{stream.creator}</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      <span>{stream.viewers}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowAllStreams(!showAllStreams)}
            >
              <Icon name="Tv" className="mr-2" size={20} />
              {showAllStreams ? "Скрыть" : "Смотреть все"}
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">⛏️</span>
              </div>
              <span className="text-xl font-bold">MCStreamer</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <Icon name="Youtube" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open("https://discord.gg", "_blank")}
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open("https://twitch.tv", "_blank")}
              >
                <Icon name="Tv" size={20} />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2024 MCStreamer. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;