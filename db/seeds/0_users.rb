users = User.create([
  {username: "guest",
    pen_name: "Guest User",
    password: "password",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },

  {username: "wirving",
    pen_name: "Washington Irving",
    password: "password",
    avatar: File.new('app/assets/images/washington-irving.jpg'),
    description: "AKA Jonathan Oldstyle. Short story writer, essayist, biographer, magazine editor, diplomat."
  },

  {username: "iasimov",
    pen_name: "Isaac Asimov",
    password: "password",
    avatar: File.new('app/assets/images/isaac-asimov.jpg'),
    description: "Writer, professor of biochemistry at BU. My Niche is hard science fiction"
  },

  {username: "rbradbury",
    pen_name: "Ray Bradbury",
    password: "password",
    avatar: File.new('app/assets/images/ray-bradbury.jpg'),
    description: "Just a writer. I fancy fantasy, science fiction, horror and mystery fiction."
  },

  {username: "sking",
    pen_name: "Stephen King",
    password: "password",
    avatar: File.new('app/assets/images/stephen-king.jpg'),
    description: "Novelist, short story writer, screenwriter, columnist, actor, television producer, singer, musician"
  },

  {username: "jdsalinger",
    pen_name: "J.D. Salinger",
    password: "password",
    avatar: File.new('app/assets/images/jd-salinger.jpg'),
    description: "Jerome David Salinger. I love the west side."
  },

  {username: "ohenry",
    pen_name: "O. Henry",
    password: "password",
    avatar: File.new('app/assets/images/o-henry.jpg'),
    description: "William Sidney Porter. You may know me for wit, wordplay, warm characterization, and surprise endings"
  },

  {username: "jupdike",
    pen_name: "John Updike",
    password: "password",
    avatar: File.new('app/assets/images/john-updike.jpg'),
    description: "novelist, short story writer, literary critic"
  },

])
