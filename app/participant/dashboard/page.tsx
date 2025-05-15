"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Calendar, Clock, Users, Medal, Bell, Wallet, Search, Filter, ArrowUpRight } from "lucide-react"
import { useWallet } from "@/contexts/wallet-context"
import { formatAddress } from "@/lib/utils"

export default function ParticipantDashboard() {
  const { wallet } = useWallet()
  const [activeTab, setActiveTab] = useState<"active" | "upcoming" | "past">("active")

  // Mock data for tournaments
  const activeTournaments = [
    {
      id: 1,
      name: "Summer Tennis Open",
      organizer: "Bay Area Tennis Club",
      sport: "Tennis",
      participants: 32,
      startDate: "2025-06-15",
      endDate: "2025-06-22",
      prize: "2.5 ETH",
      status: "In Progress",
      nextMatch: "Quarter Finals - June 18, 2:00 PM",
      image: "/tennis-stadium.jpg",
    },
    {
      id: 2,
      name: "Pro Golf Championship",
      organizer: "Golden Gate Golf Association",
      sport: "Golf",
      participants: 64,
      startDate: "2025-06-10",
      endDate: "2025-06-20",
      prize: "5.0 ETH",
      status: "In Progress",
      nextMatch: "Round 3 - June 17, 10:00 AM",
      image: "/golf-sunset.jpg",
    },
  ]

  const upcomingTournaments = [
    {
      id: 3,
      name: "Summer Bowling League",
      organizer: "Strike City Lanes",
      sport: "Bowling",
      participants: 48,
      startDate: "2025-07-05",
      endDate: "2025-08-30",
      prize: "1.8 ETH",
      registrationDeadline: "2025-06-30",
      image: "/bowling-alley.jpg",
    },
    {
      id: 4,
      name: "Beach Volleyball Cup",
      organizer: "Coastal Sports Network",
      sport: "Volleyball",
      participants: 24,
      startDate: "2025-07-15",
      endDate: "2025-07-17",
      prize: "1.2 ETH",
      registrationDeadline: "2025-07-10",
      image: "/tennis-court.png",
    },
  ]

  const pastTournaments = [
    {
      id: 5,
      name: "Spring Tennis Tournament",
      organizer: "Bay Area Tennis Club",
      sport: "Tennis",
      participants: 16,
      startDate: "2025-04-10",
      endDate: "2025-04-12",
      prize: "1.0 ETH",
      result: "Quarter-finalist",
      earnings: "0.1 ETH",
      image: "/tennis-stadium-full.jpg",
    },
    {
      id: 6,
      name: "Winter Golf Classic",
      organizer: "Golden Gate Golf Association",
      sport: "Golf",
      participants: 32,
      startDate: "2025-01-15",
      endDate: "2025-01-20",
      prize: "3.0 ETH",
      result: "Winner",
      earnings: "2.0 ETH",
      image: "/golf-course-sunset.png",
    },
  ]

  // Get tournaments based on active tab
  const getTournaments = () => {
    switch (activeTab) {
      case "active":
        return activeTournaments
      case "upcoming":
        return upcomingTournaments
      case "past":
        return pastTournaments
      default:
        return activeTournaments
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#101617]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/strikechain-logo.png" alt="Strikechain Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-white">Strikechain</span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="relative">
                <button className="text-gray-400 hover:text-white">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs">
                    2
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#345D61] to-[#191D1E] flex items-center justify-center">
                  <span className="text-sm font-medium">JS</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">John Smith</p>
                  <p className="text-xs text-gray-400">{wallet ? formatAddress(wallet.address) : "Not connected"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Participant Dashboard</h1>
            <p className="text-gray-400">Manage your tournaments and track your progress</p>
          </div>

          <div className="mt-4 flex items-center gap-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search tournaments..."
                className="rounded-lg border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#345D61] focus:outline-none w-full md:w-64"
              />
            </div>

            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-gradient-to-br from-[#101617] to-[#0a1415] p-6 border border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20">
              <Trophy className="text-[#B3EFF5]" size={24} />
            </div>
            <h3 className="text-lg font-medium">Tournaments</h3>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">8</p>
              <div className="flex items-center text-green-400 text-sm">
                <span>+2 this month</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#101617] to-[#0a1415] p-6 border border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-900/20">
              <Medal className="text-[#B3EFF5]" size={24} />
            </div>
            <h3 className="text-lg font-medium">Wins</h3>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">3</p>
              <div className="flex items-center text-green-400 text-sm">
                <span>75% win rate</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#101617] to-[#0a1415] p-6 border border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
              <Wallet className="text-[#B3EFF5]" size={24} />
            </div>
            <h3 className="text-lg font-medium">Earnings</h3>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">2.1 ETH</p>
              <div className="flex items-center text-green-400 text-sm">
                <span>≈ $4,200</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#101617] to-[#0a1415] p-6 border border-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-900/20">
              <Calendar className="text-[#B3EFF5]" size={24} />
            </div>
            <h3 className="text-lg font-medium">Upcoming</h3>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">2</p>
              <div className="flex items-center text-blue-400 text-sm">
                <span>Next: Jun 18</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Tabs */}
        <div className="mb-6 border-b border-gray-800">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("active")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "active"
                  ? "border-[#B3EFF5] text-[#B3EFF5]"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              Active Tournaments
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "upcoming"
                  ? "border-[#B3EFF5] text-[#B3EFF5]"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              Upcoming Tournaments
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "past"
                  ? "border-[#B3EFF5] text-[#B3EFF5]"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              Past Tournaments
            </button>
          </div>
        </div>

        {/* Tournament Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {getTournaments().map((tournament) => (
            <div
              key={tournament.id}
              className="overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-[#101617] to-[#0a1415]"
            >
              <div className="relative h-48">
                <Image
                  src={tournament.image || "/placeholder.svg"}
                  alt={tournament.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold">{tournament.name}</h3>
                  <p className="text-sm text-gray-300">{tournament.organizer}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs text-blue-300">
                    {tournament.sport}
                  </span>
                  {activeTab === "active" && (
                    <span className="rounded-full bg-green-900/30 px-3 py-1 text-xs text-green-300">
                      {tournament.status}
                    </span>
                  )}
                  {activeTab === "past" && tournament.result === "Winner" && (
                    <span className="rounded-full bg-yellow-900/30 px-3 py-1 text-xs text-yellow-300">Winner</span>
                  )}
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Participants</p>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <p className="text-sm">{tournament.participants}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Prize Pool</p>
                    <p className="text-sm font-medium">{tournament.prize}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Start Date</p>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <p className="text-sm">{new Date(tournament.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">End Date</p>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <p className="text-sm">{new Date(tournament.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                {activeTab === "active" && (
                  <div className="mb-4 rounded-lg bg-gray-800/50 p-3">
                    <p className="text-xs text-gray-400">Next Match</p>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-[#B3EFF5]" />
                      <p className="text-sm text-[#B3EFF5]">{tournament.nextMatch}</p>
                    </div>
                  </div>
                )}

                {activeTab === "upcoming" && (
                  <div className="mb-4 rounded-lg bg-gray-800/50 p-3">
                    <p className="text-xs text-gray-400">Registration Deadline</p>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-[#B3EFF5]" />
                      <p className="text-sm text-[#B3EFF5]">
                        {new Date(tournament.registrationDeadline!).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "past" && (
                  <div className="mb-4 rounded-lg bg-gray-800/50 p-3">
                    <p className="text-xs text-gray-400">Your Result</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Trophy size={14} className="text-[#B3EFF5]" />
                        <p className="text-sm text-[#B3EFF5]">{tournament.result}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-400">+{tournament.earnings}</p>
                      </div>
                    </div>
                  </div>
                )}

                <Link
                  href={`/tournament/${tournament.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#191D1E] via-[#345D61] to-[#191D1E] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-all"
                >
                  {activeTab === "active" && (
                    <>
                      View Tournament Details
                      <ArrowUpRight size={14} />
                    </>
                  )}
                  {activeTab === "upcoming" && (
                    <>
                      Register Now
                      <ArrowUpRight size={14} />
                    </>
                  )}
                  {activeTab === "past" && (
                    <>
                      View Results
                      <ArrowUpRight size={14} />
                    </>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#101617] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/strikechain-logo.png" alt="Strikechain Logo" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-medium">Strikechain</span>
            </div>

            <div className="flex gap-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="/support" className="text-sm text-gray-400 hover:text-white">
                Support
              </Link>
            </div>

            <div className="text-sm text-gray-400">© 2025 Strikechain. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
