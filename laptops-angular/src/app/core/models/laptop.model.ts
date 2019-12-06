export interface Laptop {
  id: number;
  name: string;
  imgUrls: string[];
  thumbnailUrl: string;
  launchDate: string;
  price: string;
  cpu: Cpu;
  display: Display;
  ram: Ram;
  primary_storage: Storage;
  gpu: Gpu;
}

interface Cpu {
  prod: string;
  model: string;
  cores: string;
}

interface Display {
  size: string;
  resolution: string;
  type: string;
  touch: string;
}

interface Ram {
  size: string;
  speed: string;
  type: string;
}

interface Storage {
  model: string;
  cap: string;
  rpm?: string;
}

interface Gpu {
  prod: string;
  model: string;
}
