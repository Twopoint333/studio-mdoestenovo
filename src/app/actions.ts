
'use server';

import { generatePoemFromImage } from '@/ai/flows/generate-poem-from-image';

export async function generatePoemAction(imageDataUri: string): Promise<{
  success: boolean;
  poem?: string;
  error?: string;
}> {
  if (!imageDataUri) {
    return { success: false, error: 'Image data is missing.' };
  }

  try {
    const result = await generatePoemFromImage({ imageDataUri });
    if (result.poem) {
      return { success: true, poem: result.poem };
    } else {
      return { success: false, error: 'The generated poem was empty.' };
    }
  } catch (error) {
    console.error('Error generating poem:', error);
    // This provides a user-friendly error message.
    // In a real application, you might want to log the full error for debugging.
    return { success: false, error: 'An unexpected error occurred while generating the poem. Please try again later.' };
  }
}
