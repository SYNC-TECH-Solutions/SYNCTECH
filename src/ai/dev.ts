
'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/validate-contact-form.ts';
import '@/ai/flows/generate-blog-post.ts';
import '@/ai/flows/generate-lead-insight.ts';
import '@/ai/flows/generate-proposal.ts';
