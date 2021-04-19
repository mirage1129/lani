import { createClient } from '@supabase/supabase-js'
import { API_URL, API_TOKEN } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const supabase = createClient(API_URL, API_TOKEN, {
  localStorage: AsyncStorage as any,
  autoRefreshToken: true,
  persistSession: true
})