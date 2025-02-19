"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Save, Trash2 } from "lucide-react"
import { Sidebar } from '@/components/sidebar';
import Header from '@/components/Header';
import { MobileNavbar } from '@/components/MobileNavBar';

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(18, "Must be at least 18 years old").max(100, "Age must be less than 100"),
  major: z.string().min(2, "Major must be at least 2 characters"),
  bio: z.string().max(500, "Bio must be less than 500 characters"),
})

type ProfileFormValues = z.infer<typeof profileSchema>

const saveProfile = async (data: ProfileFormValues) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return data
}

const deleteProfile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}

export default function ProfileDashboard() {
  const [profile, setProfile] = useState<ProfileFormValues | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      age: 18,
      major: "",
      bio: "",
    },
  })

  const onSubmit = async (data: ProfileFormValues) => {
    setIsLoading(true)
    try {
      const savedProfile = await saveProfile(data)
      setProfile(savedProfile)
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error updating your profile.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      await deleteProfile()
      setProfile(null)
      form.reset()
      toast({
        title: "Profile Deleted",
        description: "Your profile has been successfully deleted.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error deleting your profile.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-x-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        <div className="flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl mx-auto bg-slate-900 text-gray-100 shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Your Roommate Profile</CardTitle>
              <CardDescription className="text-center text-gray-400">
                Create, edit, or delete your roommate profile here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-black border-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Age</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseInt(e.target.value, 10))}
                              className="bg-black border-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="major"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Major</FormLabel>
                        <FormControl>
                          <Input placeholder="Your major" {...field} className="bg-black border-black" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself"
                            {...field}
                            className="bg-black border-black min-h-[100px]"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          Write a short bio to help potential roommates get to know you.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Save Profile
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-400">
                {profile ? "Profile last updated: Just now" : "No profile saved yet"}
              </div>
              {profile && (
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 transition-colors duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
                  Delete Profile
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

