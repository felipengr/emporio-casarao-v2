import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export function getSiteConfig() {
  const filePath = path.join(contentDir, 'site-config.json');
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

export function getHeroData() {
  const filePath = path.join(contentDir, 'hero.json');
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

export function getProdutos() {
  const filePath = path.join(contentDir, 'produtos.json');
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

export function getGaleria() {
  const filePath = path.join(contentDir, 'galeria.json');
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

export function getSobre() {
  const filePath = path.join(contentDir, 'sobre.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { 
    title: data.title as string,
    image: data.image as string,
    body: content 
  };
}

export function getParceiros() {
  const filePath = path.join(contentDir, 'parceiros.json');
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}