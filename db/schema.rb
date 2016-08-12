# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160812030923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "commenter_id", null: false
    t.integer  "story_id",     null: false
    t.string   "body",         null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "comments", ["commenter_id"], name: "index_comments_on_commenter_id", using: :btree
  add_index "comments", ["story_id"], name: "index_comments_on_story_id", using: :btree

  create_table "follow_associations", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "follow_associations", ["user_id", "follower_id"], name: "index_follow_associations_on_user_id_and_follower_id", unique: true, using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "followee_id", null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "follows", ["followee_id", "follower_id"], name: "index_follows_on_followee_id_and_follower_id", unique: true, using: :btree
  add_index "follows", ["followee_id"], name: "index_follows_on_followee_id", using: :btree
  add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "story_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["story_id"], name: "index_likes_on_story_id", using: :btree
  add_index "likes", ["user_id", "story_id"], name: "index_likes_on_user_id_and_story_id", unique: true, using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "stories", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "stories", ["author_id"], name: "index_stories_on_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "pen_name",            null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "description"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
